import React from 'react'
import {toastr} from 'react-redux-toastr'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../features/User/userSlice'


const Register = () => {
    const {register, handleSubmit, formState} = useForm()
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        try {
            dispatch(signup(data))
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div className="w-full  mb-[20px] shadow  border-t-[1px] border-[#ebecf0]">
        <div className="  w-[1170px] mx-auto py-[40px] text-center">
                <h2 className="text-[25px] font-[1000] mb-[30px]"><span>Tạo tài khoản</span></h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-[30px]">
                        <input type="text" {...register("name", {required: true})} className="w-[500px] h-[55px] px-[20px] py-[5px] text-[#383535] font-[500] border bg-[#ededed]" placeholder="Tên"/>
                    </div>
                    <div className="mb-[30px]">
                        <input type="text" {...register("email", {required: true})}  className="w-[500px] h-[55px] px-[20px] py-[5px] text-[#383535] font-[500] border bg-[#ededed]" placeholder="Email"/>
                    </div>
                    <div className="mb-[30px]">
                        <input type="password" {...register("password", {required: true})}  className="w-[500px] h-[55px] px-[20px] py-[5px] text-[#383535] font-[500] border bg-[#ededed]" placeholder="Mật khẩu"/>
                    </div>
                    <button className=" h-[45px] text-white inline-block bg-[#2962ff] px-[22px]">Đăng Ký</button>
                </form>
        </div>
    </div>
        
    </>
  )
}

export default Register