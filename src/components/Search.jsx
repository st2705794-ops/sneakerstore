import { useState } from "react"
import { products } from "../data/products"

import "../styles/search.css"
import ProductCard from "./Productcard"

function Search(){

const [search,setSearch] = useState("")

const filteredProducts = products.filter(product =>
product.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="container">

<h1>Search Shoes</h1>

<input
type="text"
placeholder="Search shoes..."
className="search"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="grid">

{filteredProducts.map(item=>(
<ProductCard key={item.id} item={item}/>
))}

</div>

</div>

)

}

export default Search