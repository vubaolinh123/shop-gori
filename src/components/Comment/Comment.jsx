import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment, getAllComment } from '../../features/Comment/commentSlice'
import { getOneProducts } from '../../features/Product/product'


const Comment = () => {
    let [renderComment, setRenderComment] = useState(0)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const commentValue = useSelector(data => data.comment.value)
    const currentProductValue = useSelector(data => data.product.value)
    const user = useSelector(state => state.user.info.user);
    const dispatch = useDispatch()
    const { id } = useParams()

    const AddComment = (value) => {
        setRenderComment(renderComment++)
        const dataComment = {
            comment: value.comment,
            Product: currentProductValue._id,
            User: user._id
        }
        dispatch(addComment(dataComment))

    }

    useEffect(() => {
        dispatch(getAllComment())
        dispatch(getOneProducts(id))
    }, [id, renderComment])


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
                        { errors.comment && <span className="text-red-500 block my-[5px] text-[15px]">Vui bình luận trước khi gửi</span> }
                    </div>
                ) : (
                    <div className="text-red-500 font-bold text-[25px] my-[20px]">Vui lòng đăng nhập để bình luận</div>
                ) }
                <div className="">
                    { commentValue && commentValue.map((comment) => (
                        comment.Product._id === currentProductValue._id && (
                            <div className="my-[10px] relative Comment">
                                <img src="https://i.imgur.com/YfvwwmW.png" alt="" width="80" className="rounded-[100px] inline-block" />
                                <span className="absolute text-blue-500 font-bold text-[18px] top-[5px] left-[83px]">{ user?.name } <span className="text-black text-[16px]">{ comment?.createdAt.slice(0, -5) }</span></span>
                                <p className="absolute top-[32px] left-[82px] text-[15px]">{ comment.comment }</p>
                                <div className="text-gray-400 text-[16px] font-bold">
                                    <button className="mr-[10px]">Trả lời</button>
                                    <button className="mr-[10px]">Chỉnh Sửa</button>
                                    <button className="">Xóa</button>
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