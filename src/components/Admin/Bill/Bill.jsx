import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { numberFormat } from '../../../config/numberFormat'
import { getAllBill } from '../../../features/Bill/billSlice'

const Bill = () => {
    const valueBill = useSelector(data => data.bill.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBill())
    }, [])

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-gray-900">Quản Trị Đơn Hàng</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 ">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    STT
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Address
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Phone
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Trạng Thái
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Tổng Tiền
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Chi Tiết
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            { valueBill && valueBill?.map((data, index) => (
                                                <tr key={ data._id }>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ index + 1 }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.name }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.email }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  ">{ data.address }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.phone }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.status }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ numberFormat.format(data.total) }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap"><Link to={ `/admin/${data._id}/detailBill` } className="text-blue-500 font-bold">Chi Tiết</Link> </td>
                                                </tr>
                                            )) }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div>
    )
}

export default Bill