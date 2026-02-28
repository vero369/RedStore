import React from "react";
import "./Pages.css";
import { image } from "../sets";

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
            I'm a front-end developer, progressing to full-stack. I've done more
            projects!
            <button className="Git">
              <a href="https://github.com/vero369" target="_blank" rel="noreferrer">
                <img src={image.GITHUB} alt="GitHub" />
                <div className="overlay">CLICK!</div>
              </a>
            </button>
          </div>

        </div>
        <div className="skills">
          <h2>EXTERNAL SKILL</h2>
          <div><a href="https://alphanovel.io/novels/fantasy/curse-of-the-crimson-eyes-by-chris-beauty" target="_blank" rel="noreferrer">
            <img src={image.chris} alt="Chris Beauty" />
          </a>
          </div>
          
        </div>

      </div>

      <div className="Apps"> <p>Subscribe on other Social Media</p>
        <a href="https://snapchat.com/t/8WR4IEr4"><img src={image.Snap} alt="" /><div className="overlay">CLICK!</div></a>

        <a href="https://www.instagram.com/chris_beauty24?igsh=NHBzbmFjMWZtZzBu&utm_source=qr"><img src={image.instagram} alt="" /><div className="overlay">CLICK!</div></a>

        <a href="https://www.youtube.com/channel/UCNE0WCrUzfS5cR1tkDzwOkg"><img src={image.Youtube} alt="" /><div className="overlay">CLICK!</div></a>

        <a href="https://x.com/VeronicaCh91249"><img src={image.X} alt="" /><div className="overlay">CLICK!</div></a>
      </div>
    </div>
  );
};

export default Me;
