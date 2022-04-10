import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaShippingFast } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts } from '../../features/Product/product'
import { numberFormat } from '../../config/numberFormat'
import { getProductInCategory } from '../../features/Category/ProInCate'
import { useForm } from 'react-hook-form'
import { read } from '../../api/product'
import { store } from '../../app/store'
import { addItemToCart } from '../../features/Cart/cartSlice'
import { toastr } from 'react-redux-toastr'
import Comment from '../Comment/Comment'


const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const [dataProduct, setProduct] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    // const dataProduct = useSelector(data=> data.product.value);
    const { catePro, product } = useSelector(data => data.proincate.value);
    const IdCate = dataProduct.CategoryProduct;
    const { id } = useParams();

    const AddCard = (data) => {
        const infoCart = {
            _id: dataProduct._id + data.size,
            size: data.size,
            image: dataProduct.image,
            quantity: quantity * 1,
            name: dataProduct.name,
            desc: dataProduct.desc,
            oldPrice: dataProduct.oldPrice * 1,
            price: dataProduct.price * 1,
            CategoryProduct: dataProduct.CategoryProduct,
            total: (dataProduct.price * 1) * (quantity * 1)
        }
        dispatch(addItemToCart(infoCart))
        setQuantity(1)
        toastr.success("Giỏ Hàng", "Sản Phẩm Của Bạn Đã Được Thêm Vào Giỏ Hàng")
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decrementQuantity = () => {
        if (quantity < 2) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }

    }


    useEffect(() => {
        const getOneProduct = async () => {
            const { data } = await read(id)
            setProduct(data)
        }
        getOneProduct()
        dispatch(getProductInCategory(IdCate));

    }, [id, IdCate])

    return (
        <>
            <div className="w-full  bg-[#fafafa] mb-[20px] shadow ">
                <div className="flex flex-row w-[1170px] mx-auto ">
                    <ul >
                        <li className="inline-block mx-[5px]"><Link to="/" className="py-[15px] inline-block text-[15px]">Trang Chủ</Link> </li>
                        <li className="inline-block mx-[5px]"><span className="text-[#999292]">/</span></li>
                        <li className="inline-block mx-[5px]"><Link to={ `/category/${catePro?._id}` } className="py-[15px]  inline-block text-[15px]">{ catePro?.name }</Link> </li>
                        <li className="inline-block mx-[5px]"><span className="text-[#999292]">/</span></li>
                        <li className="inline-block mx-[5px]"><Link to={ `/product/${dataProduct?._id}` } className="py-[15px]  inline-block text-[15px]">{ dataProduct?.name }</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="w-full  bg-white mb-[20px] solid border-b-[1px] border-[#ebecf0] pb-[30px]">
                <div className="  w-[1170px] mx-auto ">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="a"><img className="w-full" src={ dataProduct.image } alt="" /></div>
                        <div className="a">
                            <div className="">
                                <span className="font-bold text-[26px]">{ dataProduct.name }</span>
                                <div className="my-[10px]">
                                    <span className="bg-[#f2f5fa] text-[14px] inline-block px-[14px] py-[3px] text-[#f94c43] font-semibold mr-[20px]">{ 100 - Math.round((dataProduct.price / dataProduct.oldPrice) * 100) }%</span>
                                    <del className="text-[#878c8f] text-[18px] mr-[20px]">{ numberFormat.format(dataProduct.oldPrice) }</del>
                                    <span className="text-[25px] text-red-500 font-semibold">{ numberFormat.format(dataProduct.price) }</span>
                                </div>
                                <form action="" className="" onSubmit={ handleSubmit(AddCard) }>
                                    <div className="my-[30px] grid grid-cols-3  solid border-b-2 border-[#ebecf0] pb-[20px]">
                                        <div className="">Kích thước</div>
                                        <div className="col-span-2">
                                            <div className="inline-block radio">
                                                <input name="sizeProduct" type="radio" id="sizeProduct-${is}1" value="M" { ...register('size', { required: true }) } />
                                                <label htmlFor="sizeProduct-${is}1"
                                                    className="px-[14px] py-[14px] rounded flex justify-center items-center text-sm lg:text-lg w-5 h-5 lg:w-10 lg:h-14">
                                                    M
                                                </label>
                                            </div>
                                            <div className="inline-block radio">
                                                <input name="sizeProduct" type="radio" id="sizeProduct-${is}2" value="L" { ...register('size', { required: true }) } />
                                                <label htmlFor="sizeProduct-${is}2"
                                                    className="px-[14px] py-[14px] rounded flex justify-center items-center text-sm lg:text-lg w-5 h-5 lg:w-10 lg:h-14">
                                                    L
                                                </label>
                                            </div>
                                            <div className="inline-block radio">
                                                <input name="sizeProduct" type="radio" id="sizeProduct-${is}3" value="XL" { ...register('size', { required: true }) } />
                                                <label htmlFor="sizeProduct-${is}3"
                                                    className="px-[14px] py-[14px] rounded flex justify-center items-center text-sm lg:text-lg w-5 h-5 lg:w-10 lg:h-14">
                                                    XL
                                                </label>
                                            </div>
                                            {/* <div className="inline-block radio">
                                                <input type="radio" name="options1" value="L" { ...register('size', { required: true }) } />
                                                <label htmlFor="">L</label>
                                            </div>
                                            <div className="inline-block radio">
                                                <input type="radio" name="options1" value="XL" { ...register('size', { required: true }) } />
                                                <label htmlFor="">XL</label>
                                            </div> */}
                                            { errors.size && <span className="text-red-500 block my-[5px] text-[18px] font-bold">Chọn Size sản phẩm</span> }
                                        </div>
                                    </div>
                                    <h2 className="font-bold text-[22px] my-[5px] ">THÔNG TIN SẢN PHẨM</h2>
                                    <div className="solid border-b-2 border-[#ebecf0] pb-[30px] h-[180px] overflow-auto mb-[20px]">
                                        <p>{ dataProduct.desc }</p>
                                    </div>
                                    { dataProduct.status == 1 ? (
                                        <div className="grid grid-cols-3">
                                            <div className="text-[#252a2b] ">
                                                <input type="button" value="-" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none" />
                                                <input type="text" min="1" value="1" className="bg-[#fff] font-semibold h-[45px] w-[60px]  border solid border-[#f3f4f4] text-center" />
                                                <input type="button" value="+" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none" />
                                            </div>
                                            <div className="col-span-2">
                                                <button type="button" className="addCart bg-red-500 text-white h-[45px] text-[16px] px-[15px] w-full font-semibold" >HẾT HÀNG</button>
                                            </div>
                                            <h2 className="text-[#dea554] text-[18px] font-bold my-[15px]">Đã Bán Hết</h2>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-3">
                                            <div className="text-[#252a2b] ">
                                                <input type="button" onClick={ () => decrementQuantity() } value="-" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none" />
                                                <input type="text" { ...register('quantity', { required: true }) } value={ quantity } min="1" className="bg-[#fff] font-semibold h-[45px] w-[60px]  border solid border-[#f3f4f4] text-center" />
                                                <input type="button" onClick={ () => incrementQuantity() } value="+" className="bg-[#f3f4f4] border solid border-[#f3f4f4] cursor-pointer text-[16px] font-semibold h-[45px] w-[45px] text-center outline-none" />
                                            </div>
                                            <div className="col-span-2">
                                                <button className="addCart bg-red-500 text-white h-[45px] text-[16px] px-[15px] w-full font-semibold" >THÊM VÀO GIỎ</button>
                                            </div>
                                        </div>
                                    ) }

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hiển thị Comment */ }
            <Comment />
            {/* Hiển thị Comment */ }
            <div className="w-full  bg-white mb-[20px]  pb-[30px]">
                <div className="  w-[1170px] mx-auto ">
                    <h2 className="text-[27px] font-bold text-center my-[15px]"> <span>Sản Phẩm Liên Quan</span>  </h2>
                    <div className="grid grid-cols-5 gap-4">
                        { product?.map((data) => (
                            <Link to={ `/product/${data?._id}` } key={ data?._id } className="w-full transition-all duration-300 hover:shadow-xl">
                                <div className="w-full relative">
                                    <a className="cursor-pointer">
                                        <img src={ data.image } />
                                    </a>
                                    { data.status === 1 ? (
                                        <div className="bg-[#676767] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                            <span className="">Hết Hàng</span>
                                        </div>
                                    ) : (
                                        <div className="bg-[#ff0000] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                            <span span className="">{ 100 - Math.round((data.price / data.oldPrice) * 100) }%</span>
                                        </div>
                                    ) }

                                </div>
                                <div className="w-full bg-white p-[10px] shadow-[#454f5926]">
                                    <h3 className="text-[16px] text-[#797979]">{ data.name }</h3>
                                    <p className="font-semibold text-[#000] mt-[10px] text-[14px]">
                                        <span className="price">{ numberFormat.format(data.price) }</span>
                                        <span className="text-[#878c8f] line-through ml-[12px] font-light text-[13px]">{ numberFormat.format(data.oldPrice) }</span>
                                    </p>
                                </div>
                            </Link>
                        )) }

                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct