import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import "../styles/navbar.css"

function Navbar(){

const cart = useSelector(state=>state.cart)
const [open,setOpen] = useState(false)

return(

<nav className="navbar">

<h1><i>SneakerStore</i></h1>

<div className="menu-btn" onClick={()=>setOpen(!open)}>
☰
</div>

<div className={open ? "nav-links active" : "nav-links"}>

<Link to="/">Home</Link>
<Link to="/about">About</Link>

<Link to="/men">Men</Link>
<Link to="/women">Women</Link>
<Link to="/search">Search</Link>
<Link to="/contact">Contact</Link>

<Link to="/cart" className="cart-icon">

<img 
src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
alt="cart"
/>

<span className="cart-count">{cart.length}</span>

</Link>

</div>

</nav>

)

}

export default Navbar;          