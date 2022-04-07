import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/client/Homepage'
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import ContactPage from './pages/client/ContactPage'
import AllProduct from './pages/client/AllProduct'
import Dashboard from './pages/admin/Dashboard'
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
import PrivateRouter from './components/PrivateRoutes'
import Bill from './components/Admin/Bill/Bill'
import DetailBill from './components/Admin/Bill/DetailBill'


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
          </Route>
          <Route path="*" element={ <Page404 /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
