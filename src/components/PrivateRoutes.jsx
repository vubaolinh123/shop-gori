import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRouter = (props) => {
    const { user } = JSON.parse(localStorage.getItem('user'))
    if (user.role != 1) {
        return <Navigate to="/" />
    }
    return props.children
}

export default PrivateRouter