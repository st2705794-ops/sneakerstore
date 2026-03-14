import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";
import "../styles/product.css";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <div className="card">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>

      {showPopup && (
        <div className="popup">✅ {item.title} Added to Cart</div>
      )}
    </div>
  );
}

export default ProductCard;