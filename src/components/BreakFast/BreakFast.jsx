import React, { useState } from 'react'
import   './BreakFast.css'
import { menuBreakFast } from '../../Data/BreakFast'
export default function BreakFast() {
  const [breakFastMenu, setbreakFastMenu] = useState(menuBreakFast)


  function filterProduct(S){
    const filterd=menuBreakFast.filter((x)=>{return x.type===S})
    setbreakFastMenu(filterd)
  }
  return (

    <div className='BreakFast'>
<div className="containerBreakFast">
  <h1>eat بالهنا والشفا</h1>
  <div className="btnFilter">
  <button onClick={()=>setbreakFastMenu(menuBreakFast)}>All</button>

    <button onClick={()=>filterProduct("bakery")}>bakery</button>
    <button onClick={()=>filterProduct("softDrinks")}>softDrink</button>
    <button onClick={()=>filterProduct("HotDrinks")}>HotDrinks</button>
  </div>
<div className="cardsBreakFast">
{breakFastMenu.map((x,i)=>(
    <div className="cardBreakFast">
  <img src={x.img} alt="" />
  <h1 className='h4 txtcenter txtCaptlize'>{x.name}</h1>
    </div>
    
   ))}
</div>
</div>
    </div>
  )
}
