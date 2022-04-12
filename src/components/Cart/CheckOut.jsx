import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr';
import { Link, useNavigate } from 'react-router-dom';
import { addDetailBill } from '../../api/detailOrder';
import { add } from '../../api/infoOder';
import { numberFormat } from '../../config/numberFormat';
import { resetCart } from '../../features/Cart/cartSlice';

const CheckOut = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    let totalCart = 0;
    const dataCart = useSelector(data => data.cart.items);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addOder = (value) => {
        let infoOder = []


        if (localStorage.getItem('user')) {
            let idUser = JSON.parse(localStorage.getItem('user')).user._id
            infoOder = {
                name: value.fullname,
                email: value.email,
                address: value.address,
                phone: value.phone,
                status: 0,
                total: totalCart,
                User: idUser
            }
        } else {
            infoOder = {
                name: value.fullname,
                email: value.email,
                address: value.address,
                phone: value.phone,
                status: 0,
                total: totalCart,
            }
        }
        console.log(infoOder);


        const addOrder = async () => {
            if (dataCart.length > 0) {
                const { data } = await add(infoOder);
                const idOrder = data._id
                await dataCart.forEach(async (item) => {
                    await addDetailBill({
                        infoOder: idOrder,
                        name: item.name,
                        price: item.price,
                        img: item.image,
                        size: item.size,
                        total: item.total,
                        desc: item.desc,
                        quantity: item.quantity
                    })
                })
                dispatch(resetCart())
                const toastrConfirmOptions = {
                    onOk: () => { navigate("/") },
                    onCancel: () => navigate("/")
                };
                toastr.confirm('Bạn đã đặt hàng thành công, Vui lòng chờ đơn hàng vận chuyển?', toastrConfirmOptions);
            } else {
                toastr.error("Thông Báo, Bạn chưa thêm sản phẩm vào giỏ hàng để thanh toán")
            }
        }
        addOrder()

    }

    useEffect(() => {

    }, [])

    return (
        <>
            <main className="grid grid-cols-8 gap-3 my-2 relative">
                <div className="col-span-8">
                    <div className="grid grid-cols-9">
                        <div className="col-span-5 px-[65px]" id="checkout-left">
                            <h2 className="text-2xl font-bold my-4">Thanh Toán Sản Phẩm</h2>
                            <ul>
                                <li className="inline-block mr-2"><Link to="/cart" className="text-[#338dbc] text-sm">Giỏ hàng</Link></li>
                                <li className="inline-block mx-2"><span className="text-sm">Thông tin giao hàng</span></li>
                                <li className="inline-block mx-2"><span className="text-[#999999] text-sm">Thanh toán</span></li>
                            </ul>
                            <span className="block my-2 text-xl">Thông tin giao hàng</span>
                            { localStorage.getItem('user') ? "" : (
                                <div className="my-2">
                                    <span className="text-[#737373]">Bạn đã có tài khoản?</span>
                                    <Link to="/" className="text-[#338dbc]">Đăng nhập</Link>
                                </div>
                            ) }
                            <form action="" onSubmit={ handleSubmit(addOder) }>
                                <div className="">
                                    <div className="form-group">
                                        <label className="block py-2 font-bold text-lg">Họ và tên</label>
                                        <input type="text" { ...register('fullname', { required: true }) } className="border border-black w-full px-2 py-2 rounded fullname" name="fullname"
                                            placeholder="Họ và tên..." />
                                        { errors.fullname && <span className="text-red-500 block my-[5px] text-[18px] font-bold">Nhập tên người nhận</span> }
                                    </div>
                                    <div className="grid grid-cols-8 gap-2">
                                        <div className="form-group col-span-5">
                                            <label className="block py-2 font-bold text-lg">Email</label>
                                            <input type="text"  { ...register('email', { required: true }) } className="border border-black w-[100%] px-2 py-2 rounded email" name="email"
                                                placeholder="Email..." />
                                            { errors.email && <span className="text-red-500 block my-[5px] text-[18px] font-bold">Nhập email người nhận</span> }
                                        </div>
                                        <div className="form-group col-span-3">
                                            <label className="block py-2 font-bold text-lg">Số Điện Thoại</label>
                                            <input type="number"  { ...register('phone', { required: true }) } className="border border-black w-[100%] px-2 py-2 rounded phone" name="phone"
                                                placeholder="Số Điện Thoại..." />
                                            { errors.phone && <span className="text-red-500 block my-[5px] text-[18px] font-bold">Nhập số điện thoại người nhận</span> }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="block py-2 font-bold text-lg">Địa Chỉ</label>
                                        <input type="text"  { ...register('address', { required: true }) } className="border border-black w-full px-2 py-2 rounded address" name="address"
                                            placeholder="Địa Chỉ..." />
                                        { errors.address && <span className="text-red-500 block my-[5px] text-[18px] font-bold">Nhập email người nhận</span> }
                                    </div>
                                </div>
                                <div className="text-center my-3">
                                    <button type="submit" className="bg-[#338dbc] text-white py-4 px-5 rounded text-xl ">Tiếp
                                        Tục Thanh
                                        Toán</button>
                                </div>
                            </ form>
                        </div >
                        <div id="checkout-right" className="col-span-4 bg-[#fafafa] border border-gray-300 border-y-0 p-7">
                            <div className="max-h-[500px] overflow-auto">
                                { dataCart.length > 0 ? dataCart.map(item => (
                                    <div key={ item._id } className=" grid grid-cols-5 border border-b-2 border-x-0 border-t-0 py-4">
                                        <div className="col-span-1 relative ">
                                            <img src={ item.image } alt="" width="150" />
                                            <span className="absolute inline-block bg-[rgba(153,153,153,0.9)] text-white px-[10px] font-bold right-[-13px] top-[-11px]" >{ item.quantity }</span>
                                        </div>
                                        <div className="col-span-2 font-bold text-[18px] py-[45px] pl-[15px]"><span className="">{ item.name }</span></div>
                                        <div className="col-span-2  font-bold text-sm py-[45px]"><span className="text-red-500 font-bold text-[20px]">{ numberFormat.format(item.total) }</span><div className="">Size: { item.size }</div></div>
                                    </div>
                                )) : (
                                    <div className="border border-b-2 border-x-0 border-t-0 py-4 text-[23px]">
                                        <h2>Không có sản phẩm nào trong giỏ hàng</h2>
                                    </div>
                                ) }
                            </div>
                            <div className="my-4 border border-b-2 border-x-0  border-t-0 py-5">
                                <div className="grid grid-cols-2">
                                    <div className="">
                                        <span className="text-[#717171] text-lg">Tạm tính</span>
                                    </div>
                                    <div className="text-right font-bold">
                                        <span className="tamtinh"></span>
                                    </div>
                                    <div className="">
                                        <span className="text-[#717171] text-lg">Phí vận chuyển</span>
                                    </div>
                                    <div className="text-right font-bold">
                                        <span className="">--</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="">
                                    <span className="text-[#717171] text-xl">Tổng Cộng</span>
                                </div>
                                <div className="text-right font-bold text-2xl">
                                    <span className="text-red-500">{ dataCart && dataCart.forEach((data) => { totalCart += data.total }) } { numberFormat.format(totalCart) }</span>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </main >
        </>
    )
}

export default CheckOut