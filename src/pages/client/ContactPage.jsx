import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { BsClock } from 'react-icons/bs'



const ContactPage = () => {
    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <iframe className="h-[450px] w-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.562813340047!2d105.75026011488374!3d21.050171985986807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454e8a4d0bed7%3A0xd6b982ecb25fb149!2zxJDhu6ljIERp4buFbiwgUGjDumMgRGnhu4VuLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1648656163845!5m2!1svi!2s" width="600" height="450" loading="lazy"></iframe>
                </div>
                <div className="w-[1170px] mx-[auto] ">
                    <div className="w-full flex ">
                        <div className="w-[40%]">
                            <div className="w-full">
                                <h1 className="text-[25px] font-bold my-[30px]">
                                    Thông tin liên hệ
                                </h1>
                                <div className="w-full">
                                    <ul className="flex flex-col items-start">
                                        <li className="flex justify-center items-center mb-[25px]">
                                            <span className="w-[35px] h-[35px] border border-[#ddd] border-solid rounded-full flex justify-center items-center text-[14px]">
                                                <FaMapMarkerAlt className="" />
                                            </span>
                                            <p className="ml-[20px] text-[14px] text-[#696969]">
                                                <strong className="text-[#000]">
                                                    Địa chỉ
                                                </strong>
                                                <br />
                                                413/16c Lê Văn Sỹ , Phường 12 , Quận 3 , Tp. Hồ Chí Minh.
                                            </p>
                                        </li>
                                        <li className="flex justify-center items-center mb-[25px]">
                                            <span className="w-[35px] h-[35px] border border-[#ddd] border-solid rounded-full flex justify-center items-center text-[14px]">
                                                <BsEnvelope className="" />
                                            </span>
                                            <p className="ml-[20px] text-[14px] text-[#696969]">
                                                <strong className="text-[#000]">
                                                    Email
                                                </strong>
                                                <br />
                                                haigorishop@gmail.com
                                            </p>
                                        </li>
                                        <li className="flex justify-center items-center mb-[25px]">
                                            <span className="w-[35px] h-[35px] border border-[#ddd] border-solid rounded-full flex justify-center items-center text-[14px]">
                                                <IoPhonePortraitOutline className="" />
                                            </span>
                                            <p className="ml-[20px] text-[14px] text-[#696969]">
                                                <strong className="text-[#000]">
                                                    Điện thoại
                                                </strong>
                                                <br />
                                                090.331.9655
                                            </p>
                                        </li>
                                        <li className="flex justify-center items-center mb-[25px]">
                                            <span className="w-[35px] h-[35px] border border-[#ddd] border-solid rounded-full flex justify-center items-center text-[14px]">
                                                <BsClock className="" />
                                            </span>
                                            <p className="ml-[20px] text-[14px] text-[#696969]">
                                                <strong className="text-[#000]">
                                                    Thời gian làm việc
                                                </strong>
                                                <br />
                                                Thứ 2 đến Chủ Nhật từ 9h đến 21h;
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%]">
                            <div className="w-full">
                                <h1 className="text-[25px] font-bold my-[30px]">
                                    Gửi thắc mắc cho chúng tôi
                                </h1>
                                <div className="w-full">

                                    <p className="text-[15px] text-[#696969]">
                                        Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .
                                    </p>

                                    <div className="w-full">

                                        <div className="w-full pt-[20px]">
                                            <input type="text" placeholder="Tên của bạn" className="border border-[#e7e7e7] border-solid w-full h-[45px] px-[20px] bg-white text-[#5c5c5c] outline-none font-medium text-[16px]" />
                                        </div>

                                        <div className="w-full  flex ">
                                            <div className="w-[50%] my-[20px] pr-[10px]">
                                                <input type="text" placeholder="Email của bạn" className="border border-[#e7e7e7] border-solid w-full h-[45px] px-[20px] bg-white text-[#5c5c5c] outline-none font-medium text-[16px]" />
                                            </div>
                                            <div className="w-[50%] my-[20px] pl-[10px]">
                                                <input type="text" placeholder="Số điện thoại của bạn" className="border border-[#e7e7e7] border-solid w-full h-[45px] px-[20px] bg-white text-[#5c5c5c] outline-none font-medium text-[16px]" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <textarea placeholder="Nội dung" className="border border-[#e7e7e7] border-solid w-full h-[120px] p-[20px] bg-white text-[#5c5c5c] outline-none font-medium text-[16px]" />
                                        </div>

                                    </div>

                                    <div className="">
                                        <button type="button" className="text-[#fff] bg-[#2962ff] py-[12px] px-[28px] text-[14px] border border-solid border-[#2962ff] hover:text-[#2962ff] hover:bg-white transition-all duration-300 mt-[15px] mb-[60px]">
                                            GỬI CHO CHÚNG TÔI
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage