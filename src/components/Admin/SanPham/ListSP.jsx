import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { numberFormat } from '../../../config/numberFormat';
import { useParams } from 'react-router-dom';
import { getProducts, removeProducts } from '../../../features/Product/product';
import { toastr } from 'react-redux-toastr';

const ListSP = () => {
    const dataProduct = useSelector(data => data.product.value);
    const dispatch = useDispatch();

    const onRemoveProduct = (id) => {
        const toastrConfirmOptions = {
            onOk: () => dispatch(removeProducts(id)),
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn Muốn Xóa Sản Phẩm?', toastrConfirmOptions);
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [])


    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-gray-900">Quản Trị Sản Phẩm</h1>
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
                                                    Tên Sản Phẩm
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Ảnh
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Nội Dung
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Danh Mục
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Sale
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Giá
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Giá Cũ
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Trạng Thái
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                                    <Link to="/admin/product/add"
                                                        className="text-green-600 hover:text-green-900">Thêm Mới</Link>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            { dataProduct && dataProduct?.map((data, index) => (
                                                <tr key={ data._id }>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ index + 1 }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.name.substr(0, 20) }..</td>
                                                    <td className="px-6 py-4 whitespace-nowrap"><img src={ data.image } alt=""
                                                        width="100" /></td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  "><span
                                                        className="">{ data.desc.substr(0, 15) }...</span></td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        { data.CategoryProduct?.name }
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        { 100 - Math.round((data.price / data.oldPrice) * 100) }%
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ numberFormat.format(data.price) }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ numberFormat.format(data.oldPrice) }
                                                    </td>
                                                    { data.status === 1 ? <td className="px-6 py-4 whitespace-nowrap bg-red-500 text-white font-bold">Hết Hàng</td>
                                                        :
                                                        <td className="px-6 py-4 whitespace-nowrap bg-green-500 text-white font-bold">Còn Hàng</td>
                                                    }
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <Link to={ `/admin/product/${data?._id}/edit` }
                                                            className="text-indigo-600 hover:text-indigo-900 font-bold inline-block mx-[5px]">Cập Nhật</Link>
                                                        <button onClick={ () => onRemoveProduct(data?._id) }
                                                            className="text-red-600 hover:text-red-900 font-bold inline-block">Xóa</button>
                                                    </td>
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
        </div >
    )
}

export default ListSP