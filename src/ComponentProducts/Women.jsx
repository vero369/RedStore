import React, { useContext } from "react";
import { image } from "../sets";
import "./Men.css";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Women = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Jean-Baggy", price: 4500, image: image.womanBaggy1 },
    { id: 2, name: "Styled Jean", price: 2000, image: image.womanjean },
    { id: 3, name: "Plane-Jean", price: 1500, image: image.womanJeans },
    { id: 4, name: "Pinned-waist", price: 2500, image: image.womanJpant },
    { id: 5, name: "Lemongreen-Pant", price: 2000, image: image.womanpant },
    { id: 6, name: "Plane-Pant", price: 1200, image: image.womantrouserB },
    { id: 7, name: "Jean-Baggy", price: 2000, image: image.womanBrown },
    { id: 8, name: "Chinese Gown", price: 5200, image: image.womanBW },
    { id: 9, name: "London Dinner Gown", price: 2000, image: image.womanCB },
    { id: 10, name: "Latino Dinner Gown", price: 1200, image: image.womanCoffee },
    { id: 11, name: "Japanese Gown", price: 2700, image: image.womanFullB },
    { id: 12, name: "German Dinner Gown", price: 5000, image: image.womanGold },
    { id: 13, name: "Nigerian Dinner Gown", price: 4200, image: image.womanG },
    { id: 14, name: "Brazilian Dinner Gown", price: 2000, image: image.womanGown },
    { id: 15, name: "Kenya Dinner Gown", price: 2000, image: image.womanGownM },
    { id: 16, name: "French Dinner Attire", price: 2500, image: image.womanW },
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
        <h2>WOMEN</h2>

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

export default Women;
