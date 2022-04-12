import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/"><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /></a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink to="/admin" className="navlinkadmin bg-gray-900  hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Trang Chủ</NavLink>

                                <NavLink to="/admin/category" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Danh Mục</NavLink>

                                <NavLink to="/admin/product" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản Phẩm</NavLink>

                                <NavLink to="/admin/bill" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Đơn Hàng</NavLink>

                                <NavLink to="/admin/user" className="navlinkadmin text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tài Khoản</NavLink>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar