import img1 from '../../../assets/img/category1.webp'
import img2 from '../../../assets/img/category2.webp'
import img3 from '../../../assets/img/category3.webp'


import { Link } from 'react-router-dom'

const Collection = () => {
    return (

        <>
            <div className="Container py-[20px]">
                <div className="w-[1170px] flex mx-[auto]">
                    <div className="w-full flex px-[-10px]">
                        <div className="category w-[50%] px-[10px] h-full cursor-pointer">
                            <div className=" flex justify-center h-full relative">
                                <div className="mx-0 h-full">
                                    <img src={img1} className="max-w-full h-full object-cover" />
                                </div>
                                <div className="absolute w-[85%] px-[15px] pt-[15px] pb-[10px] flex flex-col items-center bg-[#fff] text-center bottom-[25px]">
                                    <p className="text-[16px] mb-[10px]">OLDSKULL</p>
                                    <h3 className="color-[#000] font-semibold pb-[10px] mb-[15px] text-[20px] border-[#999] border-b-[1px] border-solid">OLDSKULL</h3>
                                    <button className="
                                        bg-[#2962ff]
                                        text-white
                                        text-[12px]
                                        mb-[10px]
                                        tracking-wide
                                        border
                                        border-solid
                                        border-[#196fe6]
                                        hover:bg-[#fff]
                                        hover:text-[#196fe6]
                                        transition-all
                                        duration-300
                                    ">
                                        <Link className="py-[6px] px-[28px] block" to="/product/oldskull">
                                            XEM NGAY
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="category w-[25%] px-[10px] h-full cursor-pointer">
                            <div className=" flex justify-center h-full relative">
                                <div className="mx-0 h-full">
                                    <img src={img2} className="max-w-full h-full object-cover" />
                                </div>
                                <div className="px-[15px] pt-[15px] pb-[10px] absolute w-[85%] p-[15px] flex flex-col items-center bg-[#fff] text-center bottom-[25px]">
                                    <p className="text-[14px] mb-[10px]">ÁO BASIC</p>
                                    <h3 className="color-[#000] font-semibold pb-[10px] mb-[15px] text-[20px] border-[#999] border-b-[1px] border-solid ">ÁO BASIC</h3>
                                    <button className="
                                        bg-[#2962ff]
                                        text-white
                                        text-[12px]
                                        mb-[10px]
                                        tracking-wide
                                        border
                                        border-solid
                                        border-[#196fe6]
                                        hover:bg-[#fff]
                                        hover:text-[#196fe6]
                                        transition-all
                                        duration-300
                                    ">
                                        <Link className="py-[6px] px-[26px] block" to="/product/basic">
                                            XEM NGAY
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="category w-[25%] px-[10px] h-full cursor-pointer">
                            <div className=" flex justify-center h-full relative">
                                <div className="mx-0 h-full">
                                    <img src={img3} className="max-w-full h-full object-cover" />
                                </div>
                                <div className="px-[15px] pt-[15px] pb-[10px] absolute w-[85%] p-[15px] flex flex-col items-center bg-[#fff] text-center bottom-[25px]">
                                    <p className="text-[14px] mb-[10px]">TÚI TOTE</p>
                                    <h3 className="color-[#000] font-semibold pb-[10px] mb-[15px] text-[20px] border-[#999] border-b-[1px] border-solid ">TÚI TOTE</h3>
                                    <button className="
                                        bg-[#2962ff]
                                        text-white
                                        text-[12px]
                                        mb-[10px]
                                        tracking-wide
                                        border
                                        border-solid
                                        border-[#196fe6]
                                        hover:bg-[#fff]
                                        hover:text-[#196fe6]
                                        transition-all
                                        duration-300
                                    ">
                                        <Link className="py-[6px] px-[26px] block" to="/product/tote">
                                            XEM NGAY
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collection;