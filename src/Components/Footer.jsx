import React from 'react';
import './Footer.css';
//import { image } from '../sets';
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
           <form action=
              "https://formsubmit.co/da6e608935f85a00caf27344e4061b14"
               method="POST">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="Email"
            />
            <button type="submit" 
              className="SubscribeBtn">
              Subscribe
            </button> 
           
           </form>
         </div>
        </div>

      </div>

        {/*--------- second-----------*/}
        <div className='liveSection'>
          {/*<div className='section'>
            <h1 className='Live'>
              We Are Live
            </h1>
            <div className='Apps'>
              <a 
              href="https://www.linkedin.com/in/nwaekwu-veronica-b1a611395/">
                <img src={image.Linkedin} alt="" /></a>

              <a href="https://formsubmit.co/el/ruciki">
              <img src={image.MENT} alt="" /></a>
            </div>*/}

             <p class="copyright">© {new Date().getFullYear()} RedStore. All Rights Reserved.</p>

        </div>

    </div>
  );
}

export default Footer;