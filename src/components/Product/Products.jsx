import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { numberFormat } from '../../config/numberFormat';
import { getProducts } from '../../features/Product/product';




const Products = () => {
        const dataProduct = useSelector(data => data.product.value);
        const dispatch = useDispatch()
        
        useEffect(()=>{
            dispatch(getProducts())
        },[])

    return (
        <>
            <div className="pt-[15px] px-0 border-t-[15px] border-[#ebecf0] flex justify-center">
                <div className="w-[1170px] px-[10px]">
                    <h2 className="text-[#000] text-[24px] font-bold py-[15px]">
                        <a className="cursor-pointer transition-all duration-300 hover:text-[#2962ff]">TẤT CẢ SẢN PHẨM</a>
                    </h2>
                    <div className="w-full mt-[10px] mb-[30px]">
                        <div className="m-[-6px] w-[100%] inline-flex flex-wrap">
                            { dataProduct && dataProduct.map(data => (
                                <Link to={`/product/${data._id}`} key={ data._id } className=" p-[6px] w-[25%] cursor-pointer ">
                                    <div className="w-full transition-all duration-300 hover:shadow-xl">
                                        <div className="w-full relative">
                                            <a className="cursor-pointer">
                                                <img src={ data.image } />
                                            </a>
                                            
                                                {data.status == 1 ?(
                                                    <div className="bg-[#676767] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                                        <span className="">Hết Hàng</span>
                                                    </div>
                                                ):(
                                                <div className="bg-[#ff0000] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                                    <span className="">
                                                        { 100-Math.round(((data.price / data.oldPrice) * 100 ))}%
                                                    </span>
                                                </div>
                                                )} 
                                        </div>
                                        <div className="w-full bg-white p-[10px] shadow-[#454f5926]">
                                            <h3 className="text-[16px] text-[#797979]">
                                                { data.name }
                                            </h3>
                                            <p className="font-semibold text-[#000] mt-[10px] text-[14px]">
                                                <span className="price">{ numberFormat.format(data.price) }</span>
                                                <span className="text-[#878c8f] line-through ml-[12px] font-light text-[13px]">
                                                    { numberFormat.format(data.oldPrice) }
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                </Link>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products