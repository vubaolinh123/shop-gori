import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'




const WebsiteLayout = () => {
  const [toggleNavBar, setToggleNavBar] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      setToggleNavBar(false)
    }
  })

  return (
    <div>
      <NavBar toggle={ toggleNavBar } />
      <Outlet />
      <Footer />
    </div>
  )
}

export default WebsiteLayout