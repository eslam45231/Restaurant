import React from 'react'
import './Page.css'
import Navbar from '../navbar/Navbar'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'

export default function Page() {
  return (
    <div className='Page'>
      <div className="FirstPage">
        <div className="layouutPage">
        <Navbar/>
<Home/>
        </div>
      </div>
      <Menu/>
    </div>
  )
}
