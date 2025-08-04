import React from 'react'
import Header from './comoponents/Header'
import Footer from './comoponents/Footer'
import { Outlet } from 'react-router-dom'

function layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}