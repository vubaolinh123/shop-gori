import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaShippingFast } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts } from '../../features/Product/product'
import { numberFormat } from '../../config/numberFormat'
import { getProductInCategory } from '../../features/Category/ProInCate'


const DetailProduct = () => {
    const dispatch = useDispatch()
    const dataProduct = useSelector(data=> data.product.value);
    const {catePro, product} = useSelector(data => data.proincate.value);
    const IdCate = dataProduct.CategoryProduct;
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getOneProducts(id))
        dispatch(getProductInCategory(IdCate));
    },[id,IdCate])

  return (
    <>
        <div className="w-full  bg-[#fafafa] mb-[20px] shadow ">
            <div className="flex flex-row w-[1170px] mx-auto ">
                    <ul >
                        <li className="inline-block mx-[5px]"><Link to="/" className="py-[15px] inline-block text-[15px]">Trang Chủ</Link> </li>
                        <li className="inline-block mx-[5px]"><span className="text-[#999292]">/</span></li>
                        <li className="inline-block mx-[5px]"><Link to={`/category/${catePro._id}`} className="py-[15px]  inline-block text-[15px]">{catePro.name}</Link> </li>
                        <li className="inline-block mx-[5px]"><span className="text-[#999292]">/</span></li>
                        <li className="inline-block mx-[5px]"><Link to={`/product/${dataProduct._id}`} className="py-[15px]  inline-block text-[15px]">{dataProduct.name}</Link> </li>
                    </ul>
            </div>
        </div>
        <div className="w-full  bg-white mb-[20px] solid border-b-[1px] border-[#ebecf0] pb-[30px]">
            <div className="  w-[1170px] mx-auto ">
                <div className="grid grid-cols-2 gap-10">
                    <div className="a"><img className="w-full" src="https://product.hstatic.net/200000015470/product/4_1_82cbc26053574ff48d8a6836f80552f4_large.jpg" alt="" /></div>
                    <div className="a">
                        <div className="">
                            <span className="font-bold text-[26px]">{dataProduct.name}</span>
                            <div className="my-[10px]">
                                <span className="bg-[#f2f5fa] text-[14px] inline-block px-[14px] py-[3px] text-[#f94c43] font-semibold mr-[20px]">{100-Math.round((dataProduct.price/dataProduct.oldPrice)*100)}%</span>
                                <del className="text-[#878c8f] text-[18px] mr-[20px]">{numberFormat.format(dataProduct.oldPrice)}</del>
                                <span className="text-[25px] text-red-500 font-semibold">{numberFormat.format(dataProduct.price)}</span>
                            </div>
                            <form action="" className="">
                                <div className="my-[30px] grid grid-cols-3  solid border-b-2 border-[#ebecf0] pb-[20px]">
                                    <div className="">Kích thước</div>
                                        <div className="col-span-2">
                                            <div className="inline-block">
                                                <input type="radio" name="options1" value="M"/>
                                                <label htmlFor=""><span>M</span></label>
                                            </div>
                                            <div className="inline-block">
                                                <input type="radio" name="options1"  value="L"/>
                                                <label htmlFor=""><span>L</span></label>
                                            </div>
                                            <div className="inline-block">
                                                <input type="radio" name="options1"  value="XL"/>
                                                <label htmlFor=""><span>XL</span></label>
                                            </div>
                                        </div>
                                </div>
                                <h2 className="font-bold text-[22px] my-[5px] ">THÔNG TIN SẢN PHẨM</h2>
                                <div className="solid border-b-2 border-[#ebecf0] pb-[30px] h-[180px] overflow-auto mb-[20px]">
                                    <p>{dataProduct.desc}</p>
                                </div>
                                {dataProduct.status == 1 ? (
                                    <div className="grid grid-cols-3">
                                    <div className="text-[#252a2b] ">
                                        <input type="button" value="-" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none"/>
                                        <input type="text" min="1" value="1" className="bg-[#fff] font-semibold h-[45px] w-[60px]  border solid border-[#f3f4f4] text-center"/>
                                        <input type="button" value="+"  className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none"/>
                                    </div>
                                    <div className="col-span-2">
                                        <button type="button" className="addCart bg-red-500 text-white h-[45px] text-[16px] px-[15px] w-full font-semibold" >HẾT HÀNG</button>
                                    </div>
                                    <h2 className="text-[#dea554] text-[18px] font-bold my-[15px]">Đã Bán Hết</h2>
                                </div>
                                ): (
                                    <div className="grid grid-cols-3">
                                    <div className="text-[#252a2b] ">
                                        <input type="button" value="-" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none"/>
                                        <input type="text" min="1" value="1" className="bg-[#fff] font-semibold h-[45px] w-[60px]  border solid border-[#f3f4f4] text-center"/>
                                        <input type="button" value="+"  className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none"/>
                                    </div>
                                    <div className="col-span-2">
                                        <button type="button" className="addCart bg-red-500 text-white h-[45px] text-[16px] px-[15px] w-full font-semibold" >THÊM VÀO GIỎ</button>
                                    </div>
                                </div>
                                )}
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full  bg-white mb-[20px]  pb-[30px]">
            <div className="  w-[1170px] mx-auto ">
                <h2 className="text-[27px] font-bold text-center my-[15px]"> <span>Sản Phẩm Liên Quan</span>  </h2>
                <div className="grid grid-cols-5 gap-4">
                    {product?.map((data)=>(
                        <Link to={`/product/${data._id}`} key={data._id} className="w-full transition-all duration-300 hover:shadow-xl">
                        <div className="w-full relative">
                            <a className="cursor-pointer">
                                <img src="https://product.hstatic.net/200000015470/product/4_1_82cbc26053574ff48d8a6836f80552f4_large.jpg" />
                            </a>
                            {data.status == 1 ? (
                                <div className="bg-[#676767] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                    <span className="">Hết Hàng</span>
                            </div>
                            ):(
                                <div className="bg-[#ff0000] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                    <span   span className="">{100-Math.round((data.price/data.oldPrice)*100)}%</span>
                            </div>
                            )}
                            
                        </div>
                        <div className="w-full bg-white p-[10px] shadow-[#454f5926]">
                            <h3 className="text-[16px] text-[#797979]">{data.name}</h3>
                            <p className="font-semibold text-[#000] mt-[10px] text-[14px]">
                                <span className="price">{numberFormat.format(data.price)}</span>
                                <span className="text-[#878c8f] line-through ml-[12px] font-light text-[13px]">{numberFormat.format(data.oldPrice)}</span>
                            </p>
                        </div>
                    </Link>
                    ))}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default DetailProduct