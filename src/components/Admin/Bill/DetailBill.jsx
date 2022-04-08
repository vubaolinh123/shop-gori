import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { numberFormat } from '../../../config/numberFormat';
import { getDetailBill } from '../../../features/Bill/billSlice';

const DetailBill = () => {
    const { detail, info } = useSelector(data => data.bill.detailBill)
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(getDetailBill(id))
    }, [])
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-gray-900">Chi Tiết Đơn Hàng</h1>
                </div>
            </header>
            <main>
                <div className="max-w-screen-xl mx-auto py-6 ">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <div className="mx-auto p-16" >
                                        <div className="flex items-center justify-between mb-8 px-3">
                                            <div>
                                                <span className="text-2xl">ID Invoice #{ info && info._id } </span><br />
                                            </div>
                                            <div className="text-right">
                                                <img src="https://www.stenvdb.be/assets/img/email-signature.png" />
                                            </div>
                                        </div>

                                        <div className="flex justify-between mb-8 px-3">
                                            <div>
                                                Name: { info && info.name }<br />
                                                Email: { info && info.email }<br />
                                                Address: { info && info.address }<br />
                                                Phone: { info && info.phone }<br />
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
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Img</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
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
                                            <div className="text-2xl leading-none"><span className="">Total</span>:</div>
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
            </main>
        </div>
    )
}

export default DetailBill