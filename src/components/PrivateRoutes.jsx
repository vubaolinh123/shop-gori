import React from 'react'
import { Navigate } from 'react-router-dom';


export const PrivateRouter = (props) => {

    // if (localStorage.getItem('user')) {
    //     const { user } = JSON.parse(localStorage.getItem('user'))
    //     if (user.role !== 1) {
    //         return <Navigate to="/" />
    //     }
    //     return props.children
    // } else {
    //     return <Navigate to="/" />
    // }

    return props.children
}

export const PrivateRouterUser = (props) => {
    // if (!localStorage.getItem('user')) {
    //     return <Navigate to="/" />
    // }
    return props.children

}
