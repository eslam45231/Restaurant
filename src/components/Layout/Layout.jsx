



import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'



export default function Layout({userData,setuserData}) {



  return (
    <>

<Outlet></Outlet>


    </>
  )
 }
