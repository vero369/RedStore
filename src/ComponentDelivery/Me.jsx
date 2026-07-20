import React from "react";
import "./Pages.css";
import { image } from "../sets";
import { images } from "../assets";

const Me = () => {
  return (
    <div className="general">
      <div className="ME">
        <div className="first">
          <img src={images.cart} alt="logo" />
          <h1>
            Patronize Redstore today! 🎁 
          </h1>
          <p >
            Fashion is more than what you wear—it's how you express yourself.
            Discover timeless pieces and modern trends designed to refresh your wardrobe, 
            boost your confidence, and help you look your best every day.
            At RedStore, every collection is carefully selected to help you restore your style with comfort, 
            elegance, and quality.<strong> Give your wardrobe a fresh start with styles that combine comfort, 
            quality, and elegance. Whether you're dressing for work,
            a special occasion, or everyday life, 
            RedStore offers fashion that helps you feel confident wherever you go. </strong> 
            Every outfit tells a story. At RedStore, we believe the right clothing can transform not 
            only your appearance but also your confidence. Explore our carefully curated collections
            and discover fashion that empowers you to look and feel your best.
            <b> RedStore Your Fashion Confidence</b>
          </p>

          <div className="Main">
            Get in touch with the developer.
            <button className="Git">
              <a href="https://veros-ai.vercel.app/" target="_blank" rel="noreferrer">
                <img src={image.Linkedin} alt="LinkedIn" />
                <div className="overlay">CLICK!</div>
              </a>
            </button>
          </div>

        </div>
        {/*<div className="skills">
          <h2>Subscribe to my Linktree for speccial notifications.</h2>
          <div>
            <a href="https://linktr.ee/Chris_beauty12" rel="noreferrer">
             <img src={image.linktree} alt="Chris Beauty" />
            </a>
          </div>
          
        </div>*/}

      </div>

    </div>
  );
};

export default Me;
