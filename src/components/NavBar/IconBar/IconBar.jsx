import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import { numberFormat } from '../../../config/numberFormat';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../../features/User/userSlice'
import { getProductSearch } from '../../../features/Product/productSearchSlice'
import { toastr } from 'react-redux-toastr';
import { removeItemFromCart } from '../../../features/Cart/cartSlice';

let cart = []

const IconBar = ({ toggle }) => {
    const [openSearch, setOpenSearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const [openInfoUser, setOpenInfoUser] = useState(false)
    const dataCart = useSelector(data => data.cart.items);
    const quantityCart = useSelector(data => data.cart.totalQuantity);
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSearch = () => {
        if (!openSearch) {
            setOpenSearch(true)
        }
        if (openCart || openLogin) {
            setOpenCart(false)
            setOpenLogin(false)
        } else if (openSearch) {
            setOpenSearch(false)
        }
    }

    const handleCart = () => {

        if (!openCart) {
            setOpenCart(true)
        } if (openSearch || openLogin) {
            setOpenSearch(false)
            setOpenLogin(false)
        } else if (openCart) {
            setOpenCart(false)
        }

    }

    const handleLogin = () => {

        if (localStorage.getItem('user')) {
            if (!openInfoUser) {
                setOpenInfoUser(true)
            } if (openSearch || openCart || openLogin) {
                setOpenSearch(false)
                setOpenCart(false)
                setOpenLogin(false)
            } else if (openInfoUser) {
                setOpenInfoUser(false)
            }
        } else {
            if (!openLogin && !localStorage.getItem('user')) {
                setOpenLogin(true)
            } if (openSearch || openCart) {
                setOpenSearch(false)
                setOpenCart(false)
            } else if (openLogin) {
                setOpenLogin(false)
            }
        }
    }

    const Logout = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            setOpenInfoUser(false)
            navigate("/")
        }
    }

    const onSubmit = (data) => {
        dispatch(signin(data))
        setOpenLogin(false)
        navigate("/")
    }

    const removeCart = (id) => {
        const toastrConfirmOptions = {
            onOk: () => dispatch(removeItemFromCart(id)),
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Bạn Muốn Xóa Sản Phẩm Này Ra Khỏi Giỏ Hàng?', toastrConfirmOptions);
    }

    const dataSearch = useSelector(data => data.productSearch.value)

    const onSubmitSearch = (keyword) => {
        dispatch(getProductSearch(keyword.keyword))
        if (!keyword.keyword) {
            toastr.error("Thông báo", "Nhập tên sản phẩm muốn tìm")
        }

    }


    let totalCart = 0;
    useEffect(() => {

    }, [])



    return (
        <div className="flex items-center justify-center">
            <div className="flex ">

                <div>
                    <BsSearch size="22px" onClick={ handleSearch } className=" mx-[10px] cursor-pointer font-light color-[#252a2b] " />

                    { openSearch && (

                        <div className="absolute shadow-md color-[#fff] top-[70px] w-[420px] right-[178px] transition-all z-50 bg-white">
                            <div className="p-[20px] w-full">
                                <div className="block w-full">
                                    <p className="text-center text-[18px] color-[#000] border-b-[1px] pb-[10px]">TÌM KIẾM</p>
                                    <form className="flex justify-end w-full my-6" onSubmit={ handleSubmit(onSubmitSearch) }>
                                        <div className="w-full">
                                            <input
                                                type="text" { ...register('keyword') }
                                                placeholder='Tìm kiếm sản phẩm...'
                                                className="
                                                    bg-[#f3f3f3]
                                                    w-full
                                                    outline-none
                                                    h-[44px]
                                                    py-[8px]
                                                    pr-[50px]
                                                    pl-[20px]
                                                    border-solid 
                                                    border-[1px]
                                                    border-[#f3f3f3]
                                                    leading-[28px]
                                                "
                                            />
                                        </div>
                                        <button className="bg-[#f3f3f3] absolute w-[50px] h-[44px] flex items-center justify-center">
                                            <BsSearch size="18px" color="#677279" />
                                        </button>
                                    </form>
                                </div>
                                <div className="text-[15px] min-w-[200px] overflow-auto">

                                    { dataSearch && dataSearch?.map((data) => (
                                        <Link to={ `/product/${data._id}` } className="inline-block" key={ data._id }>
                                            <span className="">{ data.name }</span>
                                            <del className="inline-block mx-[5px] text-gray-500">{ numberFormat.format(data.oldPrice) }</del>
                                            <span className="inline-block text-red-500">{ numberFormat.format(data.price) }</span>
                                        </Link>
                                    )) }

                                </div>
                            </div>
                        </div>

                    ) }
                </div>
                <div>
                    <FaRegUser size="22px" onClick={ handleLogin } className="mx-[10px] cursor-pointer font-light color-[#252a2b]" />
                    { openLogin && (
                        <div className="absolute shadow-md color-[#fff] top-[70px] w-[420px] right-[178px] transition-all z-40 bg-white">
                            <div className="p-[20px] w-full">
                                <div className="block w-full">
                                    <p className="text-center text-[18px] color-[#000] ">ĐĂNG NHẬP TÀI KHOẢN</p>
                                    <p className="text-center text-[14px] text-[#a9b1b6] border-b-[1px] pb-[10px]">Nhập email và mật khẩu của bạn:</p>
                                    <div className="w-full ">
                                        <div className="flex flex-col justify-center items-center py-[20px] border-b-[1px] border-solid border-[]">
                                            <form action="" className="w-full" onSubmit={ handleSubmit(onSubmit) }>
                                                <div className="mb-[10px]">
                                                    <input type="text" { ...register('email', { required: true }) } placeholder="Email" className="px-[10px] py-[10px] w-full border solid border-[#d4d6d8] outline-none" />
                                                </div>
                                                <div className="mb-[10px]">
                                                    <input type="password"  { ...register('password', { required: true }) } placeholder="Mật khẩu" className="px-[10px] py-[10px] w-full border solid border-[#d4d6d8] outline-none" />
                                                </div>
                                                <button className="inline-block text-center bg-[#2962ff] text-white w-full py-[12px] my-[15px]">ĐĂNG NHẬP</button>
                                            </form>
                                            <p className="block text-[14px] text-[#a9b1b6]">Khách hàng mới?
                                                <Link to="/register" className="text-[#337ab7]"> Tạo tài khoản</Link>
                                            </p>
                                            <p className="block  text-[14px] text-[#a9b1b6]">Quên mật khẩu?
                                                <Link to="" className="text-[#337ab7]"> Khôi phục mật khẩu</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) }

                    { openInfoUser && (
                        <div className="absolute shadow-md color-[#fff] top-[70px] w-[300px] right-[178px] transition-all z-40 bg-white">
                            <div className="p-[20px] w-full">
                                <div className="block w-full">
                                    <p className="text-center text-[18px] color-[#000] border-b-[1px] border-solid pb-[5px]">THÔNG TIN TÀI KHOẢN</p>
                                    <span className="font-bold text-[15px] my-[10px] block">{ localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user.name : "None" }</span>
                                    <ul className="list-disc mx-[20px]">
                                        <li className=""><Link to={ `/user/${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user._id : "None"}` } className="hover:text-blue-400">Tài khoản của tôi</Link></li>
                                        <li className=""><button onClick={ () => Logout() } className="hover:text-blue-400">Đăng xuất</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    ) }

                </div>
                <div>
                    <div className="relative">
                        <BsCart2 onClick={ handleCart } size="23px" className="mx-[10px] cursor-pointer font-light color-[#252a2b] " />
                        <span className="count-holder absolute">
                            <Link to="">{ quantityCart }</Link>
                        </span>
                    </div>

                    { openCart && (

                        <div className="absolute shadow-md color-[#fff] top-[70px] w-[420px] right-[178px] transition-all z-40 bg-white">
                            <div className="p-[20px] w-full">
                                <div className="block w-full">
                                    <p className="text-center text-[18px] color-[#000] border-b-[1px] pb-[10px]">GIỎ HÀNG</p>
                                    <div className="w-full ">
                                        { dataCart.length === 0 ? (

                                            <div className="flex flex-col justify-center items-center py-[20px] border-b-[1px] border-solid border-[]">
                                                <BsCart2 className="w-[50px] h-[50px] text-[#2962ff]" />
                                                <p className="mt-[10px] text-[14px] font-light">Hiện chưa có sản phẩm</p>
                                            </div>

                                        ) : (
                                            <div className="overflow-auto max-h-[310px] ">
                                                { dataCart && dataCart.map((dataCart) => (
                                                    <div key={ dataCart._id } className="my-[10px] grid grid-cols-10 relative border-b-[1px] border-solid border-[] pb-[10px]">
                                                        <Link to={ `/product/${dataCart._id.replace(/[^a-z0-9]/g, '')}` } className="w-[80px] col-span-2 "><img src={ dataCart.image } alt="" /></Link>
                                                        <div className="col-span-7 mx-[20px]">
                                                            <p className="font-bold text-[14px]">{ dataCart?.name }</p>
                                                            <p className="text-gray-500 ">{ dataCart?.size }</p>
                                                            <span className="bg-[#f7f7f7] px-[12px] py-[3px] inline-block mt-[2px] mr-[20px] text-[15px]">{ dataCart?.quantity }</span>
                                                            <span className="text-gray-500">{ numberFormat.format(dataCart?.total) }</span>
                                                        </div>
                                                        <button onClick={ () => removeCart(dataCart._id) } className="absolute left-[95%] font-bold text-[20px]">X</button>
                                                    </div>
                                                )) }
                                            </div>
                                        ) }

                                        <div className="w-full py-[20px] flex">
                                            <div className="w-[50%]">
                                                <h2 className="text-[14px] font-medium">TỔNG TIỀN:</h2>
                                            </div>
                                            <div className="w-[50%] justify-end flex">
                                                <h2 className="text-[15px] font-bold text-[red] font-bold">{ dataCart && dataCart.forEach((data) => { totalCart += data.total }) } { numberFormat.format(totalCart) }</h2>
                                            </div>
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-3">
                                            <Link to="/cart">
                                                <button className=" text-[#fff] bg-[#2962ff] border border-solid border-[#2962ff] hover:text-[#2962ff] hover:bg-white w-full text-[14px] py-[10px] transition-all duration-300 mb-[10px]">
                                                    XEM GIỎ HÀNG
                                                </button>
                                            </Link>
                                            <Link to="/checkout">
                                                <button className="text-[#fff] bg-[#2962ff] border border-solid border-[#2962ff] hover:text-[#2962ff] hover:bg-white w-full text-[14px] py-[10px] transition-all duration-300 mb-[10px]">
                                                    THANH TOÁN
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) }
                </div>
            </div>
        </div>
    )
}

export default IconBar;