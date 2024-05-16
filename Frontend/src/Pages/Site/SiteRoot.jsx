import React from 'react'
import Header from '../../Layout/Site/Header/Header'
import Footer from '../../Layout/Site/Footer/Footer'
import { Outlet } from 'react-router'

const SiteRoot = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default SiteRoot
