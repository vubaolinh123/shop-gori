import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../../config/numberFormat';
import { getProductInCategory } from '../../../features/Category/ProInCate';
const dataSeason = [
    {
        id: 1,
        name: "Gori Season 03 / Đen",
        price: "232,000₫",
        oldPrice: "290,000₫",
        image: "https://product.hstatic.net/200000015470/product/8_1_d17ff435a1c2406494b50d8f29298ecf_large.jpg",
        sale: "-20%"
    },
    {
        id: 2,
        name: "Gori Season 03 / Xám",
        price: "232,000₫",
        oldPrice: "290,000₫",
        image: "https://product.hstatic.net/200000015470/product/12_1_da894a4b38154695837e91ff27c3c0fe_large.jpg",
        sale: "-20%"
    },
    {
        id: 3,
        name: "Gori Season 03 / Xanh Rêu",
        price: "232,000₫",
        oldPrice: "290,000₫",
        image: "https://product.hstatic.net/200000015470/product/4_1_82cbc26053574ff48d8a6836f80552f4_large.jpg",
        sale: "-20%"
    },
    {
        id: 4,
        name: "Gori Season 04 / Đen",
        price: "232,000₫",
        oldPrice: "290,000₫",
        image: "https://product.hstatic.net/200000015470/product/a010__2__5765332e7df94f14846c838ade85b42e_large.jpg",
        sale: "-20%"
    },
    {
        id: 5,
        name: "Gori Season 04 / Trắng",
        price: "232,000₫",
        oldPrice: "290,000₫",
        image: "https://product.hstatic.net/200000015470/product/1_2_4cb46bac00954ef6bff52bbeab575495_large.jpg",
        sale: "-20%"
    },
    {
        id: 6,
        name: "Gori Season 04 / Xám",
        price: "232,000₫",
        oldPrice: "290,000₫",
        image: "https://product.hstatic.net/200000015470/product/a017__2__abdbe9905b2d43588fe6c8a29a7cf064_large.jpg",
        sale: "-20%"
    },
]



const SeasonHome = () => {
    const {catePro, product} = useSelector(data => data.proincate.value);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(dataSeason);
        const idCategorySesson = "624ada6aa3b1c3dd3e9c6a21"
        dispatch(getProductInCategory(idCategorySesson))
    },[])
    return (
        <>
            <div className="pt-[15px] px-0 border-t-[15px] border-[#ebecf0] flex justify-center">
                <div className="w-[1170px] px-[10px]">
                    <h2 className="text-[#000] text-[24px] font-bold py-[15px]">
                        <Link to="/product/season" className="cursor-pointer transition-all duration-300 hover:text-[#2962ff]">SEASON</Link>
                    </h2>
                    <div className="w-full mt-[10px] mb-[30px]">
                        <div className="m-[-6px] w-[100%] inline-flex flex-wrap">
                            { product?.map(data => (
                                <div key={ data._id } className=" p-[6px] w-[25%] cursor-pointer ">

                                    <div className="w-full transition-all duration-300 hover:shadow-xl">
                                        <div className="w-full relative">
                                            <a className="cursor-pointer">
                                                <img src={ data.image } />
                                            </a>
                                            <div className="bg-[#ff0000] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                                <span className="">
                                                    { 100 - Math.round(((data.price / data.oldPrice) * 100 ))}%
                                                </span>
                                            </div>

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

                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SeasonHome;