import React, { useEffect, useState } from 'react'
import { toastr } from "react-redux-toastr";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addComment, getAllComment, removeComment, updateComment } from '../../features/Comment/commentSlice'
import { getOneProducts } from '../../features/Product/product'


const Comment = () => {
    const [valueUpdateComment, setValueUpdateComment] = useState("")
    const [openUpdateComment, setOpenUpdateComment] = useState(false)
    const [selectInputCommentId, setSelectInputCommentId] = useState('')
    const [comment, setComment] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const commentValue = useSelector(data => data.comment.value)
    const currentProductValue = useSelector(data => data.product.value)
    const user = useSelector(state => state.user.info.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const AddComment = (value) => {
        const dataComment = {
            comment: value.comment,
            Product: currentProductValue._id,
            User: user._id
        }
        dispatch(addComment(dataComment))
        toastr.success("Bình Luận", "Bình luận thành công")
        setComment(dataComment)
    }

    const deleteComment = (idComment) => {
        const toastrConfirmOptions = {
            onOk: () => {
                dispatch(removeComment(idComment))
            },
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn muốn xóa bình luận?', toastrConfirmOptions);
    }

    const showFormUpdate = (idComment) => {
        // hiển thị ra form để update comment
        setOpenUpdateComment(true)
        setSelectInputCommentId(idComment)
    }

    const handleChangeValueTextArena = (event) => {
        // Lấy value của thẻ textArena và set vào State
        setValueUpdateComment(event.target.value);
    }

    const UpdateCommentFormSubmit = (e) => {
        // Click submit sẽ lấy value từ state textarena vào đây xử lý
        e.preventDefault()
        const infoCommentUpdate = {
            _id: selectInputCommentId,
            comment: valueUpdateComment
        }
        dispatch(updateComment(infoCommentUpdate))
        toastr.success("Bình Luận", "Cập nhật bình luận thành công")
        setValueUpdateComment("")
        setComment(infoCommentUpdate)
    }

    useEffect(() => {
        dispatch(getAllComment())
        dispatch(getOneProducts(id))
    }, [id, comment])


    return (
        <div className="w-full  bg-white mb-[20px]  pb-[30px]">
            <div className="  w-[1170px] mx-auto ">
                { user ? (
                    <div className="">
                        <h2 className="font-bold text-[30px]">Bình Luận</h2>
                        <form action="" className="" onSubmit={ handleSubmit(AddComment) }>
                            <textarea className="w-full rounded border-[3px] border-black h-[80px]" { ...register('comment', { required: true }) } ></textarea>
                            <button className="border border-black rounded text-[21px] px-[7px] py-[5px] inline-block mt-[10px] bg-blue-500 text-white">Đăng</button>
                        </form>
                        { errors.comment && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng bình luận trước khi gửi</span> }
                    </div>
                ) : (
                    <div className="text-red-500 font-bold text-[25px] my-[20px]">Vui lòng đăng nhập để bình luận</div>
                ) }
                <div className="">
                    { commentValue && commentValue.map((comment) => (
                        comment.Product._id === currentProductValue._id && (
                            <div className="my-[10px] relative Comment max-w-full">
                                <img src="https://i.imgur.com/YfvwwmW.png" alt="" width="80" className="rounded-[100px] inline-block" />
                                <span className="absolute text-blue-500 font-bold text-[18px] top-[5px] left-[83px]">{ comment.User.name } <span className="text-black text-[16px]">{ comment?.createdAt.slice(0, -5) }</span></span>
                                <p className="absolute top-[32px] left-[82px] text-[15px]">{ comment.comment }</p>
                                <div className="text-gray-400 text-[16px] font-bold">
                                    <button className="mr-[10px]">Trả lời</button>
                                    { user?._id === comment.User._id && (
                                        <div className="inline-block">
                                            { selectInputCommentId === comment._id && openUpdateComment ? (
                                                <div className="mb-[20px] relative">
                                                    <form action="" className="inline-block" onSubmit={ UpdateCommentFormSubmit } >
                                                        <textarea className="w-full rounded border-[3px] border-black h-[80px]" value={ valueUpdateComment } onChange={ handleChangeValueTextArena }  ></textarea>
                                                        <button className="border border-black rounded text-[15px] px-[7px] py-[5px] inline-block mt-[10px] bg-blue-500 text-white">Cập Nhật</button>
                                                    </form>
                                                    <button className="absolute top-[86px] left-[90px] border border-black rounded text-[15px] px-[7px] py-[5px] inline-block mt-[10px] bg-blue-500 text-white " onClick={ () => setOpenUpdateComment(false) }>Hủy</button>
                                                </div>
                                            ) : (
                                                <button className="mr-[10px]" onClick={ () => showFormUpdate(comment._id) }>Chỉnh Sửa</button>
                                            ) }
                                            <button className="" onClick={ () => deleteComment(comment._id) }>Xóa</button>
                                        </div>
                                    ) }
                                </div>
                            </div>
                        )
                    )) }


                </div>
            </div>
        </div>
    )
}

export default Comment