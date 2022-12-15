import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/client/Homepage'
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import ContactPage from './pages/client/ContactPage'
import AllProduct from './pages/client/AllProduct'
import AdminLayout from './pages/layouts/AdminLayout'
import AllDanhMuc from './pages/admin/DanhMuc/AllDanhMuc'
import AddDanhMuc from './pages/admin/DanhMuc/AddDanhMuc'
import EditDanhMuc from './pages/admin/DanhMuc/EditDanhMuc'
import AllSanPham from './pages/admin/SanPham/AllSanPham'
import AddSanPham from './pages/admin/SanPham/AddSanPham'
import EditSanPham from './pages/admin/SanPham/EditSanPham'
import ThongKe from './components/Admin/ThongKe/ThongKe'
import DetailProduct from './components/DetailProducts/DetailProduct'
import Register from './components/Auth/Register'
import ProInCate from './components/Category/ProInCate'
import Cart from './components/Cart/Cart'
import CheckOut from './components/Cart/CheckOut'
import Page404 from './pages/404/Page404'
import { PrivateRouter, PrivateRouterUser } from './components/PrivateRoutes'
import Bill from './components/Admin/Bill/Bill'
import DetailBill from './components/Admin/Bill/DetailBill'
import DetailBillUser from './components/User/DetailBillUser'
import User from './components/Admin/User/User'
import UserComment from './components/Admin/User/UserComment'
import Voucher from './components/Admin/Voucher/Voucher'
import AddVoucher from './components/Admin/Voucher/AddVoucher'
import InfoUser from "./components/User/infoUser"


function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={ <WebsiteLayout /> }>
            <Route index element={ <Homepage /> }></Route>
            <Route path="contact" element={ <ContactPage /> }></Route>
            <Route path="products/:page" element={ <AllProduct /> }></Route>
            <Route path="product/:id" element={ <DetailProduct /> }></Route>
            <Route path="category/:id" element={ <ProInCate /> }></Route>
            <Route path="register" element={ <Register /> }></Route>
            <Route path="cart" element={ <Cart /> }></Route>
            <Route path="user/:id" element={ <PrivateRouterUser> <InfoUser></InfoUser> </PrivateRouterUser> }></Route>
            <Route path="user/:id/detail" element={ <PrivateRouterUser><DetailBillUser /></PrivateRouterUser> }></Route>
          </Route>
          <Route path="checkout" element={ <CheckOut /> }></Route>
          <Route path="/admin" element={ <PrivateRouter><AdminLayout /> </PrivateRouter> }>
            <Route index element={ <Navigate to="dashboard" /> }></Route>
            <Route path="dashboard" element={ <ThongKe /> }></Route >
            <Route path="category" element={ <AllDanhMuc /> }></Route >
            <Route path="category/add" element={ <AddDanhMuc /> }></Route >
            <Route path="category/:id/edit" element={ <EditDanhMuc /> }></Route >
            <Route path="product" element={ <AllSanPham /> }></Route>
            <Route path="product/add" element={ <AddSanPham /> }></Route >
            <Route path="product/:id/edit" element={ < EditSanPham /> }></Route >
            <Route path="bill" element={ <Bill /> }></Route>
            <Route path=":id/detailBill" element={ <DetailBill /> }></Route>
            <Route path="user" element={ <User /> }></Route>
            <Route path="user/:id" element={ <UserComment /> }></Route>
            <Route path="voucher" element={ <Voucher /> }></Route>
            <Route path="voucher/add" element={ <AddVoucher /> }></Route>
          </Route>
          <Route path="*" element={ <Page404 /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
