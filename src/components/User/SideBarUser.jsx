import React from 'react'
import { Link } from 'react-router-dom'

const SideBarUser = () => {

    return (
        <div className="col-span-2">
            <h2 className="font-bold text-[21px] mb-[15px]">TÀI KHOẢN</h2>
            <ul>
                <li className="iconLink"> <Link className="hover:text-blue-400" to={ `/user/${JSON.parse(localStorage.getItem('user')).user._id}` }>Thông tin tài khoản</Link> </li>
                <li className="iconLink"><Link className="hover:text-blue-400" to="/">Danh sách địa chỉ</Link></li>
            </ul>
        </div>
    )
}

export default SideBarUser