import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RestaurantsList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
