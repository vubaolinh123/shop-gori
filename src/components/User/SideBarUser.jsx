import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBarUser = () => {
    const navigate = useNavigate()

    const Logout = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            navigate("/")
        }
    }

    return (
        <div className="col-span-2">
            <h2 className="font-bold text-[21px] mb-[15px]">TÀI KHOẢN</h2>
            <ul>
                <li className="iconLink"> <Link className="hover:text-blue-400" to="/">Thông tin tài khoản</Link> </li>
                <li className="iconLink"><Link className="hover:text-blue-400" to="/">Danh sách địa chỉ</Link></li>
                <li className="iconLink"><button className="hover:text-blue-400" onClick={ () => Logout() }>Đăng xuất</button></li>
            </ul>
        </div>
    )
}

export default SideBarUser