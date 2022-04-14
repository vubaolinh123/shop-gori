import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { Link } from 'react-router-dom'
import { getAllComment } from '../../../features/Comment/commentSlice'
import { deleteUser, getAllUser, updateStatusUser } from '../../../features/Voucher/userSlice'

const User = () => {
    const [statusUser, setStatusUser] = useState([])
    const dispatch = useDispatch()
    const dataUser = useSelector(data => data.user.value)
    const dataComment = useSelector(data => data.comment.value)

    const handleOnChange = (value, id) => {
        const StatusUser = {
            statusFake: {
                status: value * 1,
            },
            id
        }
        dispatch(updateStatusUser(StatusUser))
        setStatusUser(StatusUser)
    }

    const HandledeleteUser = (id) => {

        const toastrConfirmOptions = {
            onOk: () => dispatch(deleteUser(id)),
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn Muốn Xóa Tài Khoản?', toastrConfirmOptions);
    }


    useEffect(() => {
        dispatch(getAllUser())
    }, [statusUser])


    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-gray-900">Quản Trị Tài Khoản</h1>
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
                                                    Tên
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Quyền Hạn
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Trạng Thái
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Bình Luận
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Hành Động
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            { dataUser && dataUser?.map((data, index) => (
                                                <tr key={ data._id }>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ index + 1 }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.name }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.email }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  ">{ data.role === 1 ? "Admin" : "Thành Viên" }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {
                                                            (() => {
                                                                if (data.status === 0) {
                                                                    return (
                                                                        <select value="Mở Khóa" onChange={ (e) => handleOnChange(e.target.value, data._id) } className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-green-400 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="0" className="">Kích Hoạt</option>
                                                                            <option value="1" className="">Khóa</option>
                                                                        </select>
                                                                    )
                                                                }
                                                                if (data.status === 1) {
                                                                    return (
                                                                        <select value="Khóa" onChange={ (e) => handleOnChange(e.target.value, data._id) } className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-red-400 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                            <option value="1" className="">Khóa</option>
                                                                            <option value="0" className="">Kích Hoạt</option>
                                                                        </select>
                                                                    )
                                                                }
                                                            })()
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap"> <Link to={ `${data._id}` } className="text-blue-500 font-bold">Xem Bình Luận</Link> </td>
                                                    <td className="px-6 py-4 whitespace-nowrap"> <button className="text-red-500 font-bold" onClick={ () => HandledeleteUser(data._id) }>Xóa</button> </td>
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

export default User