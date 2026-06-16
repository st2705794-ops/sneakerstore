
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { products } from "../data/products";
import "../styles/productDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id == id); // == for number/string

  const dispatch = useDispatch();

  if(!product){
    return <div style={{textAlign:"center", marginTop:"50px"}}>Product not found</div>
  }

  return (
    <div className="container">
      <div className="detail">
        <img src={product.img} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <h3>₹{product.price}</h3>
          <p>Premium quality sneakers for daily wear and running. Comfortable, stylish and durable shoes.</p>
          <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;