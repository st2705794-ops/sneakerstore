

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "../styles/navbar.css"

function Navbar(){

const cart = useSelector(state=>state.cart)

return(

<nav className="navbar">

<h1> <strong> <italic>SneakerStore </italic></strong></h1>

<div>

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

export default Navbar ;