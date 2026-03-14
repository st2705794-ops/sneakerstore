// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";

// import "../styles/productDetail.css";
// import { products } from "../data/products";
// import { addToCart } from "../redux/cartSlice";

// function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id == id);
//   const dispatch = useDispatch();

//   const [showPopup, setShowPopup] = useState(false);

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 1500);
//   };

//   if (!product) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h2>Product not found!</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="detail">
//         <img src={product.img} alt={product.title} />

//         <div className="detail-info">
//           <h2>{product.title}</h2>
//           <h3>₹{product.price}</h3>
//           <p>
//             Premium quality sneakers for daily wear and running.
//             Comfortable, stylish and durable shoes.
//           </p>

//           <button className="add-btn" onClick={handleAddToCart}>
//             Add To Cart
//           </button>

//           {showPopup && <div className="popup">✅ {product.title} Added to Cart</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;
// src/pages/ProductDetail.jsx
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