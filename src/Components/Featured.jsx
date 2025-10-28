import { useState, useEffect } from "react";
import { image } from "../sets"; // adjust if needed
import "./Featured.css";
import { NavLink,useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  // Put all your images in an array
  const images = [
    image.Regina,
    image.jhope,
    image.black,
    image.jin,
    image.racheal,
    image.menhero,
    image.purple,
    image.jhope2,
    image.fuyao,
    image.jk,
    image.womanBW,
    image.lisa,
    image.jennie,
    image.BlackM,
  ];
      
   const [index, setIndex] = useState(0);
   //const[paused, setPaused] = useState(false);

  // Auto-change every 3 seconds
  useEffect(() => {
    //if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='container'>
      <div className='Compliment'>
        <h1 className='Word'>Fit Into Fashion</h1>
        <p className='words'>  Fashion varies by <span  className="highlight">season</span>,<br />
          put on your <span className="highlight">best</span> now.<br />
          Whether it is <span className="highlight">spring</span>,<br />
          <span className="highlight">summer</span>, <span className="highlight">autumn</span> or <span className="highlight">winter</span>,<br />
          we have got you <span className="highlight">covered</span>.<br />
          All goods affordable at a <span className="highlight">friendly rate</span>,<br />
         enjoy your <span className="highlight">shopping</span>.....</p>
          <div onClick={()=>navigate('/About')} className='Me'>
            <img src={image.ToonMe} alt="Me" />
            <h2 className='about'> About Us</h2>
          </div>
      </div>

      {/*-----------------  feature page  ----------------- */}

     <div className="featured">
      {/* Heading */}
      <h1 className="heading">
        <span className="star">&#9733;</span>
        Rock on Fashion Like a Celebrity
        <span className="star">&#9733;</span>
      </h1>

      {/* Content Row */}
      <div className="content">
        {/* Left: Availability stock */}
        <div /*onClick={()=>navigate('/Product')}*/className="availability">
          <div onClick={()=>navigate('./Unisex')} className="stock">
            <img src={image.menfull9} alt="Men Full Set" />
            <div className="overlay">Available</div>
            <span className="caption">2p's</span>
          </div>

          <div onClick={()=>navigate('./Women')} className="stock">
            <img src={image.womanW} alt="Women Wear" />
            <div className="overlay">Available</div>
            <span className="caption">Women</span>
          </div>

          <div onClick={()=>navigate('./Men')}className="stock">
            <img src={image.men2Ps} alt="Men Outfit" />
            <div className="overlay">Available</div>
            <span className="caption">Men</span>
          </div>
        </div>

        {/* Right: Slideshow */}
        <div className="slideshow" >
          <img
            src={images[index]}
            alt={`model-${index}`}
            className="slideshow-img"
          />
          {/*<div className="pause-text">{paused ? "Play" : "Click"}</div>*/}
        </div>
        
      </div>
     </div>
    </div>
  );
};

export default Featured;
