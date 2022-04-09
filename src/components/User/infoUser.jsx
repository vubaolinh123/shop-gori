import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { read } from '../../api/user'
import { numberFormat } from '../../config/numberFormat'
import SideBarUser from './SideBarUser'


const InfoUser = () => {
    const [user, setUser] = useState();
    const [info, setInfo] = useState();
    const { id } = useParams()
    const navigate = useNavigate()

    // check ID user tránh người dùng sửa URL vào user của tài khoản khác khi đăng nhập
    if (id.length !== 24 || JSON.parse(localStorage.getItem('user')).user._id !== id) {
        navigate("/")
    }


    useEffect(() => {

        const getInfoUser = async () => {
            try {
                const { data } = await read(id);
                setUser(data.user);
                setInfo(data.info)
            } catch (error) {
                console.log("Error Slice User", error);
            }
        }
        getInfoUser();


    }, [])
    return (
        <div className="py-[50px] border-t-[1px] border-solid border-[] w-[90%] mx-auto">
            <div className="font-bold text-[25px] mb-[30px] text-center ">
                <span className="customLine">Tài khoản của bạn</span>
            </div>
            <div className="grid grid-cols-10 ">
                <SideBarUser />
                <div className="col-span-8">
                    <h2 className="font-bold text-[21px] mb-[15px] border-b-[1px] border-solid border-[] pb-[10px]">THÔNG TIN TÀI KHOẢN</h2>
                    <div className="mb-[30px]">
                        <span className="font-bold text-[17px]">{ user?.name }</span>
                        <span className=" block my-[5px] text-[15px]">{ user?.email }</span>
                        <span className="text-[15px] ">Việt Nam</span>
                        <span className="block text-blue-400 mt-[15px] underline"> <Link to="/">Xem địa chỉ</Link> </span>
                    </div>
                    { info && info.length === 0 ? (
                        <div className="border-[7px] border-solid border-blue-200 my-[25px] p-[15px]">Bạn chưa đặt mua sản phẩm nào ở cửa hàng.</div>
                    ) :
                        <div className="">
                            <table className="overflow-auto  divide-y divide-gray-200 ">
                                <thead className="bg-gray-50">
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TÊN NGƯỜI NHẬN</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SỐ ĐIỆN THOẠI</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGÀY ĐẶT</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TỔNG GIÁ TRỊ</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TRẠNG THÁI</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HÀNH ĐỘNG</th>
                                </thead>
                                { info && info.map((bill, index) => (
                                    <tbody key={ bill._id } className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-2 whitespace-nowrap">#{ index + 1 }</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{ bill.name }</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{ bill.phone }</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{ bill.email }</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{ bill.createdAt.slice(0, -5) }</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{ numberFormat.format(bill.total) }</td>
                                            <td className="px-4 py-2 whitespace-nowrap "><span className="text-blue-500 bg-blue-100 font-bold px-[5px] py-[2px]"> { bill.status === 0 ? "Chờ Xác Nhân" : bill.status === 1 ? "Đang Vận Chuyển" : bill.status === 2 ? "Giao thành công" : bill.status === 3 ? "Hủy Đơn" : "Đơn Bị Hủy" }</span></td>
                                            <td className="px-4 py-2 whitespace-nowrap text-center"> <Link to={ `/user/${bill._id + (index + 1)}/detail` } className="bg-[#e9a31e] text-white block">Chi Tiết</Link> </td>
                                        </tr>
                                    </tbody>
                                )) }
                            </table>
                        </div> }



                </div>
            </div>
        </div >
    )
}

export default InfoUser