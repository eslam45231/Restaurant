import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"

import Notfound from "./components/Notfound/Notfound.jsx"
import Page from './components/Page/Page.jsx'
import BreakFast from './components/BreakFast/BreakFast.jsx'








export default function App() {







// eslint-disable-next-line no-undef






let routers=createBrowserRouter([
  {path:"",element:<Layout />,children:[
   {index:true,element:<Page/>},
   {path:"BreakFast",element:<BreakFast/>},
      {path:"*",element: <Notfound/>}
  ]}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
