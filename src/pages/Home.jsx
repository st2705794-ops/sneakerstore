import ProductCard from "../components/Productcard"
import { products } from "../data/products"
import "../styles/home.css"

function Home(){

return(

<div className="container">

<h1 className="moving-text">
<strong>All types of shoes for men and women are available here....</strong>
</h1>

<div className="grid">

{products.map(item=>(
<ProductCard key={item.id} item={item}/>
))}

</div>

</div>

)

}

export default Home ;