import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { Link, useParams } from 'react-router-dom'
import { numberFormat } from '../../../config/numberFormat'
import { getAllVoucher, removeVoucher } from '../../../features/Voucher/voucher'


const Voucher = () => {
    const dataVoucher = useSelector(data => data.voucher.value)
    const dispatch = useDispatch()

    const onRemoveVoucher = (id) => {
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(removeVoucher(id))
            },
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn muốn xóa Voucher?', toastrConfirmOptions);
    }

    useEffect(() => {
        dispatch(getAllVoucher())
    }, [])
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-gray-900">Chi Tiết Bình Luận</h1>
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
                                                    Mã
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Giá Giảm
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Số Lần Sử Dụng
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Ngày Tạo
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                                    <Link to="/admin/voucher/add"
                                                        className="text-green-600 hover:text-green-900 font-bold">Thêm Mới</Link>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            { dataVoucher && dataVoucher?.map((data, index) => (
                                                <tr key={ index }>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ index + 1 }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.name }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ numberFormat.format(data.priceSale) }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.used }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.createdAt.slice(0, -5) }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap"> <button className="text-red-500 font-bold" onClick={ () => onRemoveVoucher(data?._id) }>Xóa</button> </td>
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

export default Voucher