import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarAdmin from '../../components/Admin/NavBar/NavBarAdmin'
import Footer from '../../components/Footer/Footer'





const AdminLayout = () => {
    return (
        <div className="min-h-full">
            <NavBarAdmin />
            <Outlet />
        </div>
    )
}

export default AdminLayout