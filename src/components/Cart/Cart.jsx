import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
        <div className="w-full  bg-[#fafafa] mb-[20px] shadow ">
            <div className="flex flex-row w-[1170px] mx-auto ">
                    <ul >
                        <li className="inline-block mx-[5px]"><Link to="/" className="py-[15px] inline-block text-[15px]">Trang Chủ</Link> </li>
                        <li className="inline-block mx-[5px]"><span className="text-[#999292]">/</span></li>
                        <li className="inline-block mx-[5px]"><span className="py-[15px]  inline-block text-[15px]">Giỏ hàng</span> </li>
                    </ul>
            </div>
        </div>
        <div className="w-full  bg-white mb-[20px] solid border-b-[1px] border-[#ebecf0] pb-[30px] border-b-[1px] border-solid border-[]">
            <div className="  w-[1170px] mx-auto ">
                <h2 className="text-center my-[20px]"><span className="font-bold text-[25px]">Giỏ hàng của bạn</span></h2>
                <div className="grid grid-cols-10 gap-10">
                    <div className="col-span-7">
                        <div className="bg-[#fafafa] py-[10px] px-[10px]">Bạn đang có <strong>1 sản phẩm</strong> trong giỏ hàng</div>
                        <div className="overflow-auto max-h-[440px]">

                            <div className="RenderProduct px-[10px]">
                                <div className="grid grid-cols-10 my-[15px] gap-[10px]">
                                    <img className="col-span-2 w-[100px]" src="//product.hstatic.net/200000015470/product/a010__2__5765332e7df94f14846c838ade85b42e_medium.jpg " alt="" />
                                    <div className="col-span-7">
                                        <span className="font-bold">Gori Season 4 / Đen</span>
                                        <span className="block text-[14px] my-[2px] mx-[5px]">M</span>
                                        <div className="text-[#252a2b] mb-[5px]">
                                            <input type="button"   value="-" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[25px] w-[25px] text-center outline-none"/>
                                            <input type="text"   value="1"  min="1" className="bg-[#fff] font-semibold h-[25px] w-[60px]  border solid border-[#f3f4f4] text-center"/>
                                            <input type="button" value="+"  className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[25px] w-[25px] text-center outline-none"/>
                                        </div>
                                        <span className="font-bold">261,000₫</span>
                                    </div>
                                    <div className="text-center py-[40px] pl-[20px] text-[25px]"><span><BsFillTrashFill/></span></div>
                                </div>
                                <div className="border-b-[1px] border-solid border-[]">
                                    <div className="grid grid-cols-2 my-[10px]">
                                        <div className="font-bold text-[20px]"> <span>Thành tiền: </span> </div>
                                        <div className="text-right font-bold text-red-500 text-[21px]"> <span>441,000₫</span> </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="border col-span-3 h-[220px]">
                        <div className="text-center m-[10px] font-bold text-[18px] border-b-[1px] border-solid border-[] pb-[10px]">
                            <span>Thông Tin Đơn Hàng</span>
                        </div>
                        <div className="grid grid-cols-2 mx-[10px] py-[20px] font-bold text-[18px] border-b-[1px] border-solid border-[]  ">
                            <span className="text-[22px]">Tổng Tiền:</span>
                            <span className="text-right text-[22px] text-red-500">702,000₫</span>
                        </div>

                        <div className="text-white bg-red-500 text-center text-[20px] py-[5px] mx-[10px] my-[22px]">
                            <button >Thanh Toán</button>
                        </div>
                    </div>

                </div>
            </div>
         </div>
    </>
  )
}

export default Cart