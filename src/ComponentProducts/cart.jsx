import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
// eslint-disable-next-line no-unused-vars
import {  motion ,AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import "./cart.css";
import { useNavigate } from "react-router-dom";


// ...existing code...
const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);
  // Fix: Ensure price is always two decimals
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  const pay = async (e) => {
    e.preventDefault();
  if (cart.length === 0) navigate('/cart');
  else navigate('/Pay');
}

  return (
    <motion.div
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="cart-container">
        <h2 className="cart-title">
          <FaShoppingCart className="cart-icon" /> Your Cart
        </h2>

        {cart.length === 0 ? (
          <motion.p
            className="empty-cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            No items added yet 😔 <button className="checkout-btn" onClick={()=>navigate('/Product')} >Shop Now</button>
          </motion.p>
        ) : (
          <>
            <ul className="cart-list">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.li
                    key={item.id || index} // Prefer item.id if available
                    className="cart-item"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={item.image} alt={item.name} className="cart-img" />
                    <div className="cart-info">
                      <span className="cart-name">{item.name}</span>
                      <span className="cart-price">${item.price.toFixed ? item.price.toFixed(2) : item.price}</span>
                    </div>
                    <motion.button
                      className="remove-btn"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#c62828",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </motion.button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="cart-total">
              <h3>
                Total: <span>${totalPrice}</span>
              </h3>
              <motion.button onClick={pay}
                className="checkout-btn"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#d32f2f",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Proceed to Checkout →
              </motion.button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
// ...existing code...
export default Cart;
