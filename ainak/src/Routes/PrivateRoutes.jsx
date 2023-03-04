import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((store) => store.authReducer.isAuth)
    
    console.log(isAuth)
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={'/login'} state={location.pathname} replace />;   
    }
    return children
}

export default PrivateRoute