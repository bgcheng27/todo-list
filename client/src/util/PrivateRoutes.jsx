import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoutes({ logged }) {
    return (
        logged ? <Outlet /> : <Navigate to="/login" />
    )
}