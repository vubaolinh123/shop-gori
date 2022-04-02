import React from 'react'
import Collection from './Collection/Collection'
import Hoodie from './Hoodie/Hoodie'
import SeasonHome from './Season/Season'



const ContainerHome = () => {
    return (
        <>
            <Collection />
            <SeasonHome />
            <Hoodie />
        </>
    )
}

export default ContainerHome