import React, { useContext } from "react";
import { images } from "../assets";
import { image } from "../sets";
import "./Men.css";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const navigate = useNavigate();
  
   const { cart, addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Red polo", price: 1200, image: images.gallery4 },
    { id: 2, name: "Dark Blue polo", price: 1500, image: images.product4 },
    { id: 3, name: "Black polo", price: 1000, image: images.product6 },
    { id: 4, name: "Plain Silver Trouser", price: 2000, image: image.menWB },
    { id: 5, name: "Jean Trouser", price: 2500, image: image.menJean },
    { id: 6, name: "Black Trouser", price: 2700, image: image.menBJ },
    { id: 7, name: "Plain Silver Baggy", price: 3000, image: image.menBaggy },
    { id: 8, name: "Carton Trouser", price: 2500, image: image.menBaggyBrown },
    { id: 9, name: "Brown Trouser", price: 2700, image: image.menbaggythickB },
    { id: 10, name: "Milky canvas", price: 2500, image: images.product5 },
    { id: 11, name: "Black sport shoe", price: 1500, image: images.product2 },
    { id: 12, name: "Black main sporting canvas", price: 2500, image: images.product10 },
    { id: 13, name: "Ash sporting Shoe", price: 2000, image: images.product11 },
  ];

  {/*//  Add item to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // Remove item from cart
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  //  Calculate total
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);*/}
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
        <h2>MEN</h2>

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

export default Men;