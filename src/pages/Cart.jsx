import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "red", fontSize:"40px" }}>Your Cart</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p>Cart is empty ....</p>
          <button 
            style={{
              padding:"12px 25px", 
              background:"#18c658", 
              color:"white", 
              border:"none", 
              borderRadius:"8px",
              cursor:"pointer",
              marginTop:"20px",
              fontSize:"16px"
            }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
        {cart.map(item => (
          <div className="cartItem" key={item.id}>
            
            {/* ITEM IMAGE */}
            <img src={item.img} alt={item.title} className="cart-img"/>

            <h3>{item.title}</h3>
            <p>₹{item.price}</p>

            <div className="qty-btns">
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>

            <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop:"30px" }}>
          <button 
            style={{
              padding:"12px 25px", 
              background:"#ff4d4d", 
              color:"white", 
              border:"none", 
              borderRadius:"8px",
              cursor:"pointer",
              fontSize:"16px"
            }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
        </>
      )}
    </div>
  );
}

export default Cart;