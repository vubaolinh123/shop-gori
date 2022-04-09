import React, { useEffect } from 'react'
import SideBarUser from './SideBarUser'
import { getDetailBill, updateStatusBill } from '../../features/Bill/billSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { numberFormat } from '../../config/numberFormat';
import { toastr } from 'react-redux-toastr';

const DetailBillUser = () => {
    const { detail, info } = useSelector(data => data.bill.detailBill)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams()
    const IdDetail = id.slice(0, -1)
    const IdBill = id.slice(-1)

    const handleOnClickHuyDon = () => {
        const bill = {
            statusFake: {
                status: 4,
            },
            id: info._id
        }
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(updateStatusBill(bill))
                const idUser = JSON.parse(localStorage.getItem('user')).user._id
                navigate(`/user/${idUser}`)
            },
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn Có Chắc Muốn Hủy Đơn?', toastrConfirmOptions);

    }

    useEffect(() => {
        dispatch(getDetailBill(IdDetail))
    }, [])
    return (
        <div className="py-[50px] border-t-[1px] border-solid border-[] w-[90%] mx-auto">
            <div className="font-bold text-[25px] mb-[30px] text-center ">
                <span className="customLine">Tài khoản của bạn</span>
            </div>
            <div className="grid grid-cols-10 ">
                <SideBarUser />
                <div className="col-span-8">
                    <div className="grid grid-cols-3">
                        <h2 className="font-bold text-[18px] col-span-2">Đơn Hàng <span className="bg-[#f0e538]">#{ IdBill } </span> đặt lúc <span className="bg-[#f0e538]">{ info?.createdAt.slice(0, -5) }</span>  hiện <span className="bg-[#f0e538]">{ info?.status === 0 ? "Đang chờ xác nhận" : info?.status === 1 ? "Đang vận chuyển" : info?.status === 2 ? "Đã giao thành công" : info?.status === 3 ? "Đã bị Admin hủy đơn" : "Đã bị bạn hủy đơn" }</span> </h2>
                        { info && info.status === 0 ? <div className="text-right"  ><button onClick={ handleOnClickHuyDon } className="bg-[#f17425] text-white font-bold px-[5px] py-[2px]">Hủy Đơn</button> </div> : "" }
                    </div>
                    <h2 className="font-bold text-[25px] my-[15px]">Chi Tiết Đơn Hàng</h2>
                    <div className="">
                        <div className="max-w-screen-xl mx-auto py-6 ">
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <div className="mx-auto p-5" >
                                                <div className="flex items-center justify-between mb-8 px-3">
                                                    <div>
                                                        <span className="text-2xl">Mã Đơn #{ info && info._id } </span><br />
                                                    </div>
                                                    <div className="text-right">
                                                        <img src="https://www.stenvdb.be/assets/img/email-signature.png" />
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mb-8 px-3">
                                                    <div>
                                                        Tên: { info && info.name }<br />
                                                        Email: { info && info.email }<br />
                                                        Địa Chỉ: { info && info.address }<br />
                                                        Số Điện Thoại: { info && info.phone }<br />
                                                    </div>
                                                    <div className="text-right">
                                                        Company Name<br />
                                                        Street 12<br />
                                                        10000 City<br />
                                                        hello@yoursite.com
                                                    </div>
                                                </div>

                                                <div className="border border-t-2 border-gray-200 px-3"></div>
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Tên</th>
                                                            <th scope="col">Ảnh</th>
                                                            <th scope="col">Giá</th>
                                                            <th scope="col">Số Lượng</th>
                                                            <th scope="col">Tổng cộng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        { detail && detail.map((infoDetail, index) => (
                                                            <tr key={ index }>
                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                    { infoDetail.name }
                                                                </td>
                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                    <img className="inline-block" src={ infoDetail.img } width="100" alt="" />
                                                                </td>
                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                    { numberFormat.format(infoDetail.price) }
                                                                </td>
                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                    { infoDetail.quantity }
                                                                </td>
                                                                <td className="text-center px-6 py-4 whitespace-nowrap">
                                                                    { numberFormat.format(infoDetail.total) }
                                                                </td>
                                                            </tr>
                                                        )) }

                                                    </tbody>
                                                </table>

                                                <div className="flex justify-between items-center mb-2 px-3 border-t py-2">
                                                    <div className="text-2xl leading-none"><span className="">Tổng Tiền</span>:</div>
                                                    <div className="text-2xl text-right text-red-500 font-bold">{ info && numberFormat.format(info.total) }</div>
                                                </div>

                                                <div className="flex mb-8 justify-end px-3">
                                                    <div className="text-right w-1/2 px-0 leading-tight">
                                                        <small className="text-xs">Nullam auctor, tellus sit amet eleifend interdum, quam nisl luctus quam, a
                                                            tincidunt
                                                            nisi eros ac dui. Curabitur leo ipsum, bibendum sit amet suscipit sed, gravida non lectus. Nunc
                                                            porttitor lacus sapien </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBillUser