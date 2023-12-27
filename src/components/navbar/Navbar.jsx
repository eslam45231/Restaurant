import './Navbar.css'
export default function Navbar({userData ,logout}) {
  return (
    <>
    <div className="Navbar">
<div className="firstNav">
  <div className="leftFirst">
<p><span><i class="fa-solid fa-location-dot"></i></span>Lorem ipsum dolor sit amet.</p>
<p><span><i class="fa-solid fa-clock"></i></span> daily 8:00 am to 10:00 pm</p>
  </div>
  <div className="rightFirst">
    <p><span><i class="fa-solid fa-phone"></i></span> <span>Lorem ipsum dolor sit.</span></p>
    <p><span><i class="fa-regular fa-message"></i></span> <span>Lorem ipsum dolor sit.</span></p>
    </div>
</div>
<div className="secNav">
  <div className="logo">
<div className="one">
  <i class="fa-solid fa-utensils"></i>

</div>
<div className="two">
<p>grilli</p>
<p>restaurant</p>
</div>
  </div>
  <div className="Links">
    <ul>
      <li>Home</li>
      <li>menus</li>
      <li>about us</li>
      <li>out chefs</li>
      <li>contact</li>
    </ul>
  </div>
  <button><span>find a table</span>
  </button>
</div>
    </div>
  
    </>
  )
}
