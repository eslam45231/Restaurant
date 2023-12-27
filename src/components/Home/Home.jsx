import React, { useState } from 'react'
import   './Home.css'
import { slider } from '../../Data/Slider'
import { motion } from 'framer-motion'

export default function Home() {
    const [selected, setselected] = useState(0)
    const selecetLength=slider.length-1
  return (
    <div className='Home'>
       
        <p className='ParaHome'>Lorem, ipsum dolor.</p>
        <div className="slider">
        <div className="layoutHome">
            <p
            onClick={()=>{selected===0?setselected(selecetLength):setselected(selected-1)}}
            ><i class="fa-solid fa-angle-left"></i></p>
            <p
                        onClick={()=>{selected===selecetLength?setselected(0):setselected(selected+1)}}

            ><i class="fa-solid fa-angle-right"></i></p>
        </div>
         <div className="containerSlider">
         <motion.h1 transition={{duration:.5}} whileInView={{opacity:[0,1],x:[50,0]}}>{slider[selected].title}</motion.h1>
            <motion.p transition={{duration:.5}} whileInView={{opacity:[0,1],y:[50,0]}}>{slider[selected].para}</motion.p>
            <motion.button transition={{duration:.5,delay:.3}} whileInView={{opacity:[0,1],y:[50,0]}}>Lorem, ipsum dolor.</motion.button>
         </div>
        </div>
    </div>
  )
}
