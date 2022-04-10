import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getCategory } from '../../../features/Category/category';


const ListBar = () => {
    const dataCategory = useSelector(data => data.category.value);
    const user = useSelector(state => state.user.info.user);
    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [user])

    return (
        <div className="flex mx-auto">
            <ul className="flex flex-row items-center justify-center ">
                <li className="mx-[10px] color-[#252a2b]">
                    <NavLink to="/" className="nav-link">Trang chủ</NavLink>
                </li>
                <li className="listNav mx-[10px] color-[#252a2b] relative ">
                    <NavLink to="/products/1" className="flex justify-center items-center nav-link" >
                        Sản phẩm
                        <MdKeyboardArrowDown size="16px" />
                    </NavLink>
                    <div className="listItem absolute bg-white z-50 top-[46px]">
                        <ul className="min-w-[180px]">
                            { dataCategory?.map((category) => (
                                <li key={ category._id } className="border border-[#f6f6f6] text-[14px] text-[#252a2b]">
                                    <Link className="py-[8px] px-[18px] block" to={ `/category/${category._id}` }>{ category.name }</Link>
                                </li>
                            )) }
                        </ul>
                    </div>
                </li>
                <li className="mx-[10px] color-[#252a2b]">
                    <NavLink to="/contact" className="nav-link">Liên hệ</NavLink>
                </li>
                { user?.role === 1 ? (
                    <li className="mx-[10px] color-[#252a2b]">
                        <NavLink to="/admin" className="nav-link">Admin</NavLink>
                    </li>
                ) : (
                    ""
                ) }

            </ul>
        </div>
    )
}

export default ListBar;
