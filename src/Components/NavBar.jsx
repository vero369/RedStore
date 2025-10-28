import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(false); // product dropdown
  const [user, setUser] = useState(null); // firebase user

  // ✅ Watch for login state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ Handle click for login/signup button
  const handleClick = () => {
    if (user) {
      navigate("/UserAccount");
    } else {
      navigate("/login");
    }
  };

   // ✅ Get user initials (if no photo)
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={logo} alt="logo" />

      {/* Mobile toggle */}
      <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navlinks */}
      <div className={`navlink ${isOpen ? "open" : ""}`}>
        <ul className="items">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <li>Home</li>
            <hr />
          </NavLink>

          {/* Product dropdown */}
          <div className="nav-item">
            <div
              className="product-link"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <li className="PDJ">Product ▾</li>
            </div>

            {openDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate("./Product")}>All Wears</li>
                <li onClick={() => navigate("./Men")}>Men</li>
                <li onClick={() => navigate("./Women")}>Women</li>
                <li onClick={() => navigate("./Unisex")}>Unisex</li>
              </ul>
            )}
          </div>
          <hr />

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <li>Deliver</li>
            <hr />
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <li>Cart</li>
            <hr />
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <li>About</li>
            <hr />
          </NavLink>
        </ul>

        {/* ✅ User button logic */}
        {user ? (
          <div className="user-info">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="user-avatar"
                title={user.displayName}
                onClick={() => navigate("/UserAccount")}
              />
            ) : (
              <div className="user-avatar initials" onClick={() => navigate("/UserAccount")}>
                {getInitials(user.displayName)}
              </div>
            )}
          </div>
        ) : (
          <button onClick={handleClick} className="btn">
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
