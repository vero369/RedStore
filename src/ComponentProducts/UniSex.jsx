import React, { useContext } from "react";
import { image } from "../sets";
import { images } from "../assets";
import "./Men.css";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const UniSex = () => {
  const navigate = useNavigate();
  const { cart,addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Red 2P’s", price: 2000, image: image.menWhite },
    { id: 2, name: "Dark Blue 2P’s", price: 1200, image: image.menFull1 },
    { id: 3, name: "Black 2P’s", price: 2000, image: image.menFull2 },
    { id: 4, name: "Red Sport Set", price: 2500, image: image.menFull3 },
    { id: 5, name: "Blue Sport Set", price: 2000, image: image.menFull4 },
    { id: 6, name: "Black Sport Set", price: 1500, image: image.menFull5 },
    { id: 7, name: "Red Full Set", price: 2000, image: image.menFull6 },
    { id: 8, name: "Blue Full Set", price: 2500, image: image.menfull7 },
    { id: 9, name: "Black Full Set", price: 3000, image: image.menfull8 },
    { id: 10, name: "Classic Black Set", price: 2000, image: image.menfull9 },
    { id: 11, name: "Rolex Watch", price: 2000, image: images.product8 },
    { id: 12, name: "Sport Watch", price: 2500, image: images.product9 },
    { id: 13, name: "Apple Watch", price: 2000, image: images.exclusive },
  ];

    // eslint-disable-next-line no-unused-vars
    const handleAdd = (product) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);
    if (alreadyInCart) {
      navigate("/cart");
    }
    else {
      addToCart(product);
    }
  };

  return (
    <div className="container">
      <div className="MEN">
        <h2>UNISEX</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="top" key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
              <button
                onClick={() => {
                  addToCart(item);
                  alert(`${item.name} added to cart!`);
                }}
                className="btn"
              >
                ${item.price}.00
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="View" onClick={() =>navigate("/cart")} >View Cart</button>
    </div>
  );
};

export default UniSex;
