import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Ensure CSS styles are linked

const NavBar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">🍽️ Foodie Delight</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/login">Login / Signup</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
