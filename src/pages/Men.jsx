
import ProductCard from "../components/Productcard"
import { products } from "../data/products"


function Men(){

const men = products.filter(p=>p.category==="men")

return(

<div className="container">

<h1 className="moving-text">
 <strong>All types of shoes for men are available here... </strong> </h1>

<div className="grid">

{men.map(item=>(
<ProductCard key={item.id} item={item}/>
))}

</div>

</div>

)

}

export default Men