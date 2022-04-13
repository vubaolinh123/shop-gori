import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { useParams } from 'react-router-dom'
import { removeComment } from '../../../features/Comment/commentSlice'
import { getOneUser } from '../../../features/Voucher/userSlice'

const UserComment = () => {
    const dataCommentByUser = useSelector(data => data.user.comment)
    const dispatch = useDispatch()
    const { id } = useParams()

    const deleteComment = (idComment) => {
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(removeComment(idComment))
            },
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn muốn xóa bình luận?', toastrConfirmOptions);
    }

    useEffect(() => {
        dispatch(getOneUser(id))
        console.log(dataCommentByUser);
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
                                                    Email
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Bình Luận
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Ngày Bình Luận
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Hành Động
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">

                                            { dataCommentByUser && dataCommentByUser.comment?.map((data, index) => (
                                                <tr key={ index }>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ index + 1 }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ dataCommentByUser.user.email }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.comment }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{ data.createdAt.slice(0, -5) }</td>
                                                    <td className="px-6 py-4 whitespace-nowrap"> <button className="text-red-500 font-bold" onClick={ () => deleteComment(data._id) }>Xóa</button> </td>
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

export default UserComment