import React from 'react'
import "./Log.css";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="User"> RedStore Got You Covered With the Best Deals {/*Everthing must be in this div*/}
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default User;