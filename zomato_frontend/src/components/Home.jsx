import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Ensure CSS styles are linked

const Home = () => {
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

      {/* Hero Section */}
      <header className="hero">
        <h1>Discover the Best Restaurants in Town! 🍕🍔🍣</h1>
        <p>Find your favorite food spots and enjoy delicious meals anytime.</p>
        <Link to="/restaurants">
          <button className="btn">Explore Restaurants</button>
        </Link>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>"Food is not just fuel; it’s love, comfort, and happiness on a plate." 🍽️❤️ </h2>
        <p>Food is more than just something we eat—it’s a celebration of flavors, cultures, and togetherness. A bite of your favorite dish can bring back memories, warm your heart, and turn an ordinary day into something special. Whether it’s the sweetness of a homemade dessert or the spicy kick of your favorite street food, every meal is a little moment of joy. So, savor each bite, share your meals with love, and let food be your daily dose of happiness! 🍕🍜🍩💕
</p>
        
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Foodie Delight. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
