


const FooterDetail = () => {

    const description = 'Ra đời với mong muốn mang đến cho các bạn trẻ những bộ quần áo đơn giản nhưng vẫn thể hiện được cá tính riêng . Gori sẽ mang đến những sản phẩm không chỉ đẹp về mẫu mà còn chất lượng về chất vải cho bạn Chúng tớ quan tâm đến nhu cầu của mọi cá nhân và trân trọng từng sản phẩm gửi tới Gorier'
    const boCongThuong = 'https://theme.hstatic.net/200000015470/1000737480/14/footer_logobct_img.png?v=77'

    return (
        <>
            <div className="w-full">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-[1170px]">
                        <div className="w-full flex px-[-10px]">
                            <div className="w-[25%] mx-[10px]">
                                <h4 className="cursor-default font-bold text-[18px]">
                                    GORI VIETNAM
                                </h4>
                                <p className="mt-[10px] text-justify text-[14px]">
                                    {description}
                                </p>
                                <a className="mt-[20px] block">
                                    <img src={boCongThuong} alt='Bộ Công Thương' />
                                </a>
                            </div>
                            <div className="w-[25%] mx-[10px]">
                                <h4 className="cursor-default font-bold text-[18px]">
                                    LIÊN HỆ
                                </h4>
                                <p className="mt-[10px] text-justify font-semibold text-[14px]">
                                    Địa chỉ:
                                    <span className="font-normal ml-[3px]">
                                        413/16c Lê Văn Sỹ , phường 12 , Quận 3 , Tp. Hồ Chí Minh.
                                    </span>
                                </p>
                                <p className="mt-[10px] text-justify font-semibold text-[14px]">
                                    Điện Thoại:
                                    <span className="font-normal ml-[3px]">
                                        090.331.9655
                                    </span>
                                </p>
                                <p className="mt-[10px] text-justify font-semibold text-[14px]">
                                    Email:
                                    <span className="font-normal ml-[3px]">
                                        haigorishop@gmail.com
                                    </span>
                                </p>

                            </div>
                            <div className="w-[25%] mx-[10px]">
                                <h4 className="cursor-default font-bold text-[18px]">
                                    HỖ TRỢ KHÁCH HÀNG
                                </h4>
                                <ul className="mt-[10px] text-justify text-[14px]">
                                    <li className="mt-[10px]">Tìm kiếm</li>
                                    <li className="mt-[10px]">Giới thiệu</li>
                                    <li className="mt-[10px]">Chính sách đổi trả</li>
                                    <li className="mt-[10px]">Chính sách bảo mật</li>
                                    <li className="mt-[10px]">Điều khoản dịch vụ</li>
                                    <li className="mt-[10px]">Liên Hệ</li>
                                </ul>

                            </div>
                            <div className="w-[25%] mx-[10px]">
                                <h4 className="cursor-default font-bold text-[18px]">
                                    FANPAGE FACEBOOK
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-[30px] cursor-default">
                        <div className="bg-[#333] text-[12px] text-[#fff]">
                            <p className="py-[8px] flex items-center justify-center">
                                Copyright © 2022 Gori VietNam. Powered by Linh Vu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterDetail;