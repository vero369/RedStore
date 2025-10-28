import React from 'react'
import "./Pages.css";
import { image } from "../sets";

const Contacts = () => {
  return (
    <div className="US">
      <div className="us">
        <img src={image.CuSe} alt="" />
      <h1>Contact Us </h1>
      <p>
        We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Tap the button below.
      </p>
      <button className="Btn">Contact Us</button>
      </div>
    </div>
  )
}

export default Contacts;