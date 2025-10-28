import React from 'react';
import './Footer.css';
import { image } from '../sets';
import { images } from '../assets';

const Footer = () => {
  return (
    <div className="Container">
      {/*----------- first--------*/}
      <div className='RedStore'>
        
        <div className="Store">
          <img src={images.logowhite} alt="RedStore Logo" />

         <div className="newsletter">
           <h2>Stay in Fashion</h2>
           <p>Subscribe to get updates on new arrivals & discounts</p>
           <form action="https://formsubmit.co/el/vayiwo" method="POST">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="Email"
            />
            <button type="submit" className="SubscribeBtn">Subscribe</button>
           </form>
         </div>
        </div>

      </div>

        {/*--------- second-----------*/}
        <div className='liveSection'>
          <div className='section'>
            <h1 className='Live'>
              We Are Live on Social App
            </h1>
            <div className='Apps'>
              <a href="https://snapchat.com/t/8WR4IEr4"><img src={image.Snap} alt="" /></a>

              <a href="https://www.instagram.com/chris_beauty24?igsh=NHBzbmFjMWZtZzBu&utm_source=qr"><img src={image.instagram} alt="" /></a>

              <a href="https://formsubmit.co/el/ruciki"><img src={image.Email1} alt="" /></a>
            </div>
             <p class="copyright">Copyright  2025 - Chris_beauty </p>
          </div>
        </div>

    </div>
  );
}

export default Footer;