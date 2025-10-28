import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import { image } from "../sets";
import "../Components/Featured.css";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const Sign = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  // ✅ Detect user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate("/UserAccount"); // Redirect if already logged in
      } else {
        setUser(null);
        navigate('/Sign');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Function for Google Sign-in
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User info:", user);
      navigate("/UserAccount");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // ✅ Logout function
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length, paused]);

  return (
    <>
      <div className="featured">
        <h1 className="heading">
          <span className="star">&#9733;</span>
          Rock on Fashion Like a Celebrity
          <span className="star">&#9733;</span>
        </h1>

        <div className="slideshow" onClick={() => setPaused((p) => !p)}>
          <img
            src={images[index]}
            alt={`model-${index}`}
            className="slideshow-img"
          />
          <div className="pause-text">{paused ? "Play" : "Click"}</div>
        </div>

        <div className="Sign">
          <div className="Form">
            <span>{user ? "Welcome Back!" : "Sign Up"}</span>
          </div>

          <div className="ImageContainer">
            <img src={image.UserIn} alt="User" />
          </div>

          {!user ? (
            <form className="Regform">
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button onClick={handleGoogleSignIn} type="submit" className="btn">Register</button>
              <button
                type="button"
                className="btn"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </button>
            </form>
          ) : (
            <button className="btn" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sign;
