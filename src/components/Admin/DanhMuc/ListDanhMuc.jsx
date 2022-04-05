import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategory, removeCategory } from '../../../features/Category/category';

const ListDanhMuc = () => {
    const Category = useSelector(data => data.category.value);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategory());
    },[])

    const onDelete = (id) =>{
        const comfirm = window.confirm("Bạn có muốn xóa không ?");
        if(comfirm){
            dispatch(removeCategory(id))
        }
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-gray-900">Quản Trị Danh Mục Sản Phẩm</h1>
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
                                                    Tên Danh Mục
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                                    <Link to="/admin/category/add"
                                                        className="text-green-600 hover:text-green-900">ADD</Link>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            {Category && Category?.map((data,index)=>(
                                                <tr key={data._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link to={`/admin/category/${data._id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900 ">Edit</Link>
                                                        <button onClick={()=>onDelete(data._id)}
                                                        className="btn-remove btn text-red-600 hover:text-red-900">Delete</button>
                                                    </td>
                                            </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ListDanhMuc