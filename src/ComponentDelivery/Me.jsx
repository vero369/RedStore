import React from "react";
import "./Pages.css";
import { image } from "../sets";
import { ShelfMW } from "../sets";

const Me = () => {
  return (
    <div className="general">
      <div className="ME">
        <div className="first">
          <img src={image.ToonMe} alt="me" />
          <h1>I'm the creator</h1>
          <p>
            Hi there! I'm <strong>Chris_beauty</strong>. How are you? I hope
            you're enjoying your time on <b>RedStore</b>. Thanks for
            patronizing!
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
        <div className="skills">
          <h2>Subscribe to my Linktree for speccial notifications.</h2>
          <div><a href="https://linktr.ee/Chris_beauty12" rel="noreferrer">
            <img src={image.linktree} alt="Chris Beauty" />
          </a>
          </div>
          
        </div>

      </div>

      {/*<div className="Apps"> <p>Subscribe on other Social Media</p>
        <a href="https://snapchat.com/t/8WR4IEr4"><img src={image.Snap} alt="" /><div className="overlay">CLICK!</div></a>

        <a href="https://www.instagram.com/chris_beauty24?igsh=NHBzbmFjMWZtZzBu&utm_source=qr"><img src={image.instagram} alt="" /><div className="overlay">CLICK!</div></a>

        <a href="https://www.youtube.com/channel/UCNE0WCrUzfS5cR1tkDzwOkg"><img src={image.Youtube} alt="" /><div className="overlay">CLICK!</div></a>

        <a href="https://x.com/VeronicaCh91249"><img src={image.X} alt="" /><div className="overlay">CLICK!</div></a>
      </div>*/}
    </div>
  );
};

export default Me;
