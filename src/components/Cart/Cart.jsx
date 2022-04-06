import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom'
import { numberFormat } from '../../config/numberFormat';
import { decInQty, incInQty, removeItemFromCart } from '../../features/Cart/cartSlice';


const Cart = () => {
    let totalCart = 0;
    const dataCart = useSelector(data => data.cart.items);
    const quantityCart = useSelector(data => data.cart.totalQuantity);
    const dispatch = useDispatch()

    const removeCart = (id) => {
        const toastrConfirmOptions = {
            onOk: () => dispatch(removeItemFromCart(id)),
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn Muốn Xóa Sản Phẩm Này Ra Khỏi Giỏ Hàng?', toastrConfirmOptions);
    }

    return (
        <>
            <div className="w-full  bg-[#fafafa] mb-[20px] shadow ">
                <div className="flex flex-row w-[1170px] mx-auto ">
                    <ul >
                        <li className="inline-block mx-[5px]"><Link to="/" className="py-[15px] inline-block text-[15px]">Trang Chủ</Link> </li>
                        <li className="inline-block mx-[5px]"><span className="text-[#999292]">/</span></li>
                        <li className="inline-block mx-[5px]"><span className="py-[15px]  inline-block text-[15px]">Giỏ hàng</span> </li>
                    </ul>
                </div>
            </div>
            <div className="w-full  bg-white mb-[20px] solid border-b-[1px] border-[#ebecf0] pb-[30px] border-b-[1px] border-solid border-[]">
                <div className="  w-[1170px] mx-auto ">
                    <h2 className="text-center my-[20px]"><span className="font-bold text-[25px]">Giỏ hàng của bạn</span></h2>
                    <div className="grid grid-cols-10 gap-10">
                        <div className="col-span-7">
                            <div className="bg-[#fafafa] py-[10px] px-[10px]">Bạn đang có <strong>{ quantityCart } sản phẩm</strong> trong giỏ hàng</div>
                            <div className="overflow-auto max-h-[540px]">

                                { dataCart && dataCart.map((cart) => (
                                    <div key={ cart._id } className="RenderProduct px-[10px]">
                                        <div className="grid grid-cols-10 my-[15px] gap-[10px]">
                                            <Link to={ `/product/${cart._id.replace(/[^a-z0-9]/g, '')}` } className="col-span-2 w-[100px]"><img src={ cart.image } alt="" /> </Link>
                                            <div className="col-span-7">
                                                <span className="font-bold">{ cart.name }</span>
                                                <span className="block text-[14px] my-[2px] mx-[5px]">{ cart.size }</span>
                                                <div className="text-[#252a2b] mb-[5px]">
                                                    <input type="button" onClick={ () => dispatch(decInQty({ id: cart._id, quantity: cart.quantity })) } value="-" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[25px] w-[25px] text-center outline-none" />
                                                    <input type="text" value={ cart.quantity } min="1" className="bg-[#fff] font-semibold h-[25px] w-[60px]  border solid border-[#f3f4f4] text-center" />
                                                    <input type="button" onClick={ () => dispatch(incInQty({ id: cart._id, quantity: cart.quantity })) } value="+" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[25px] w-[25px] text-center outline-none" />
                                                </div>
                                                <span className="font-bold">{ numberFormat.format(cart.price) }</span>
                                            </div>
                                            <div className="text-center py-[40px] pl-[20px] text-[25px]"><span className="cursor-pointer" onClick={ () => removeCart(cart._id) }><BsFillTrashFill /></span></div>
                                        </div>
                                        <div className="border-b-[1px] border-solid border-[]">
                                            <div className="grid grid-cols-2 my-[10px]">
                                                <div className="font-bold text-[20px]"> <span>Thành tiền: </span> </div>
                                                <div className="text-right font-bold text-red-500 text-[21px]"> <span>{ numberFormat.format(cart.total) }</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                )) }

                            </div>
                        </div>
                        <div className="border col-span-3 h-[220px]">
                            <div className="text-center m-[10px] font-bold text-[18px] border-b-[1px] border-solid border-[] pb-[10px]">
                                <span>Thông Tin Đơn Hàng</span>
                            </div>
                            <div className="grid grid-cols-2 mx-[10px] py-[20px] font-bold text-[18px] border-b-[1px] border-solid border-[]  ">
                                <span className="text-[22px]">Tổng Tiền:</span>
                                <span className="text-right text-[22px] text-red-500">{ dataCart && dataCart.forEach((data) => { totalCart += data.total }) } { numberFormat.format(totalCart) }</span>
                            </div>

                            <div className="text-white bg-red-500 text-center text-[20px] py-[5px] mx-[10px] my-[22px]">
                                <button >Thanh Toán</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="my-[30px]">
                <div className="text-center"> <Link to="/product" className="border border-black rounded text-[22px] font-bold px-[200px] py-[7px] hover:text-[#2962ff] hover:border-[#4b77f1]">Tiếp Tục Mua Hàng</Link> </div>
            </div>
        </>
    )
}

export default Cart