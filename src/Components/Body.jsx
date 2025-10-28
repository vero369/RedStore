import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from "framer-motion";
import './Body.css';

// ✅ Firebase imports
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check if user is logged in with Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(user)); // store user info
      } else {
        setIsLoggedIn(false);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  // ✅ Button handler
  const handleClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/product'); // if logged in → open shop
    } else {
      navigate('/login'); // if not → open login page
    }
  };

  return (
    <div className='all'>
      <div className="right">
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Give Yourself <br /> a New Style, Wear Your <br /> Best Moment
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          “RedStore is more than fashion—it's a lifestyle. Every piece is designed to let you wear your best moment—
          whether it's a casual day out, a big win, or an unforgettable night. From bold streetwear to timeless classics,
          we have got the perfect fit to help you look your best, feel your best, and live your best”...
        </Motion.p>

        <Motion.button
          onClick={handleClick}
          className="BTN"
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 300, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          Shop Now &#8594;
        </Motion.button>
      </div>
    </div>
  );
};

export default Body;
