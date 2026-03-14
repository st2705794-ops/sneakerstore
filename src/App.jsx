import { BrowserRouter,Routes,Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Search from "./components/Search"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
// import Product from "./pages/Product"; 
function App(){

return(

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/men" element={<Men/>}/>
<Route path="/women" element={<Women/>}/>
<Route path="/search" element={<Search/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/product/:id" element={<ProductDetail/>}/>
  {/* <Route path="/product/:category" element={<Product />} /> */}

</Routes>

<Footer />

</BrowserRouter>

)

}

 export default App
