import React from 'react'
import './Menu.css'
import { menu } from '../../Data/Menu'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Menu() {
    
  return (
    <div className='Menu'>
        <p className='ParaHome'>Lorem, ipsum dolor.</p>
        <div className="containerMenu">
            <div className="textMenu">
                <motion.h1 transition={{duration:.3}} whileInView={{opacity:[0,1],y:[50,0]}} className="titleMenu">we offer top notch</motion.h1>
                <motion.p transition={{duration:.3,delay:.3}} whileInView={{opacity:[0,1],y:[50,0]}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam fugit nobis ipsum, in sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam fugit nobis ipsum, in sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam fugit nobis ipsum, in sint?</motion.p>
            </div>
            <div className="cardSmenu">
{menu.map((x,i)=>(
    <motion.div transition={{duration:.8,delay:i*.3}} whileInView={{opacity:[0,1],x:i%2===0?[-50,0]:[50,0]}} className="cardMenu" >
         <Link id='ViewMenu' to="/BreakFast">
                    <div className="topCAmEnu">
                        <img src={x.imgae} alt="" />
                    </div>
                    <div className="bottomCAmEnu">
                        <h1>{x.meal}</h1>
                       <p>view menu</p>
                    </div>
                    </Link>
                </motion.div>
))}

                

            </div>
        </div>
    </div>
  )
}
