import React from 'react'
import { Link } from 'react-router-dom'

const ListSP = () => {
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
                                                    Title
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Image
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Desc
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Category
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Discount
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Cost Price
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col"
                                                    classNameName="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                                    <a href="/admin/product/add"
                                                        className="text-green-600 hover:text-green-900">ADD</a>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">1</td>
                                                <td className="px-6 py-4 whitespace-nowrap">link</td>
                                                <td className="px-6 py-4 whitespace-nowrap"><img src="1" alt=""
                                                    width="100" /></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span
                                                    className=""> 111</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    AAA
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    12%
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">111</td>
                                                <td className="px-6 py-4 whitespace-nowrap">111
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">OK</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="/admin/product/2/edit"
                                                        className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                    <button data-id="1"
                                                        className="btn-remove btn text-red-600 hover:text-red-900">Delete</button>
                                                </td>
                                            </tr>

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