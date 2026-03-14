import ProductCard from "../components/Productcard"
import { products } from "../data/products"


function Women(){

const women = products.filter(p=>p.category==="women")

return(

<div className="container">

<h1 className="moving-text">

    <strong>All types of shoes for Women are available here... </strong></h1>

<div className="grid">

{women.map(item=>(
<ProductCard key={item.id} item={item}/>
))}

</div>

</div>

)

}

export default Women  