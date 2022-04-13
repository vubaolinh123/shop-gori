import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { Link } from 'react-router-dom'
import { numberFormat } from '../../../config/numberFormat'
import { getAllBill } from '../../../features/Bill/billSlice'
import { updateStatusBill } from '../../../features/Cart/cartSlice'

const Bill = () => {
    const [reRenderPage, setReRenderPage] = useState([])
    const valueBill = useSelector(data => data.bill.value)
    const dispatch = useDispatch()

    const handleOnChange = (value, id) => {
        const bill = {
            statusFake: {
                status: value * 1,
            },
            id
        }
        dispatch(updateStatusBill(bill))
        setReRenderPage(bill)
    }

    useEffect(() => {
        dispatch(getAllBill())
    }, [reRenderPage])

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
                                                    <td className="px-6 py-4 whitespace-nowrap">

                                                        {
                                                            (() => {
                                                                if (data.status === 0) {
                                                                    return (
                                                                        <select value="Trạng Thái" onChange={ (e) => handleOnChange(e.target.value, data._id) } className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-black bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="0" className="">Trạng Thái</option>
                                                                            <option value="1" className="">Đang Vận Chuyển</option>
                                                                            <option value="2">Giao Thành Công</option>
                                                                            <option value="3">Hủy Đơn Hàng</option>
                                                                        </select>
                                                                    )
                                                                }
                                                                if (data.status === 1) {
                                                                    return (
                                                                        <select value="Đang Vận Chuyển" onChange={ (e) => handleOnChange(e.target.value, data._id) } className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-green-300 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="1" >Đang Vận Chuyển</option>
                                                                            <option value="2">Giao Thành Công</option>
                                                                            <option value="3">Hủy Đơn Hàng</option>
                                                                            <option value="4">Đơn Hàng Bị Hủy</option>
                                                                        </select>
                                                                    )
                                                                }
                                                                if (data.status === 2) {
                                                                    return (
                                                                        <select className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-green-500 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="2">Giao Thành Công</option>
                                                                        </select>
                                                                    )
                                                                }
                                                                if (data.status === 3) {
                                                                    return (
                                                                        <select className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-red-500 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="3">Hủy Đơn Hàng</option>
                                                                        </select>
                                                                    )
                                                                }
                                                                if (data.status == 4) {
                                                                    return (
                                                                        <select className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-red-500 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="4">Đơn Hàng Bị Hủy</option>
                                                                        </select>
                                                                    )
                                                                }
                                                            })()
                                                        }

                                                    </td>
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