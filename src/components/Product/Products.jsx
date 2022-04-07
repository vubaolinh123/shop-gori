import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom';
import { numberFormat } from '../../config/numberFormat';
import { getProductFilter, getProductPage, getProducts } from '../../features/Product/product';
import { useNavigate } from 'react-router-dom'



const Products = () => {
    let [reRenderPage, setReRenderPage] = useState(0)
    const dataProduct = useSelector(data => data.product.value);
    const dataProductPage = useSelector(data => data.product.valueLimitPage);
    const dataProductFilter = useSelector(data => data.product.valueFilter)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { page } = useParams()

    const totalPage = []
    for (let index = 1; index <= Math.ceil(dataProduct.length / 8); index++) {
        totalPage.push(index)
    }

    const handleOnChange = (value) => {
        const Filter = {
            page: page,
            order: value
        }
        dispatch(getProductFilter(Filter))
        setReRenderPage(reRenderPage++)
    }

    useEffect(() => {
        if (page > totalPage.length) {
            navigate('/products/1')
        }
        dispatch(getProductPage(page))
        dispatch(getProducts())

    }, [page, reRenderPage])

    return (
        <>
            <div className="pt-[15px] px-0 border-t-[15px] border-[#ebecf0] flex justify-center">
                <div className="w-[1170px] px-[10px]">
                    <div className="grid grid-cols-2">
                        <h2 className="text-[#000] text-[24px] font-bold py-[15px]">
                            <a className="cursor-pointer transition-all duration-300 hover:text-[#2962ff]">TẤT CẢ SẢN PHẨM</a>
                        </h2>
                        <div className="inline-block relative w-64 ">
                            <select onChange={ (e) => handleOnChange(e.target.value) } className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-[50px] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="-createdAt">Sắp Xếp</option>
                                <option value="price">Giá: Tăng dần</option>
                                <option value="-price">Giá: Giảm dần</option>
                                <option value="createdAt">Cũ nhất</option>
                                <option value="-createdAt">Mới nhất</option>
                            </select>
                            <div className="pointer-events-none absolute bottom-[36px] right-0 flex items-center px-2 text-gray-700 text-[20px]">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                            <div className="pointer-events-none absolute bottom-[38px] left-0 flex items-center px-2 text-gray-700">
                                <FaFilter />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-[10px] mb-[30px]">
                        <div className="m-[-6px] w-[100%] inline-flex flex-wrap">
                            { dataProductPage && dataProductPage.map(data => (
                                <Link to={ `/product/${data._id}` } key={ data._id } className=" p-[6px] w-[25%] cursor-pointer ">
                                    <div className="w-full transition-all duration-300 hover:shadow-xl">
                                        <div className="w-full relative">
                                            <a className="cursor-pointer">
                                                <img src={ data.image } />
                                            </a>

                                            { data.status == 1 ? (
                                                <div className="bg-[#676767] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                                    <span className="">Hết Hàng</span>
                                                </div>
                                            ) : (
                                                <div className="bg-[#ff0000] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                                    <span className="">
                                                        { 100 - Math.round(((data.price / data.oldPrice) * 100)) }%
                                                    </span>
                                                </div>
                                            ) }
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
            <div className="text-center my-[10px]">
                <ul className="text-gray-500 text-[23px]">
                    { totalPage.map((page, index) => (
                        <li key={ index } className="inline-block mr-[15px] hover:font-bold hover:text-black mb-[10px]"><NavLink to={ `/products/${page}` } className="pageActive">{ page }</NavLink> </li>
                    )) }
                </ul>
            </div>
        </>
    )
}

export default Products