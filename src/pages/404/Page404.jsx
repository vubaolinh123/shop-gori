import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

const Page404 = () => {
    return (
        <>
            <NavBar />
            <div className="text-center py-[250px] border-t-[1px] border-solid border-[] ">
                <span className="text-[30px] font-bold text-red-500">PAGE NOT FOUND 404</span>
            </div>
            <Footer />
        </>

    )
}

export default Page404