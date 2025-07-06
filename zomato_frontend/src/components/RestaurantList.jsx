import React, { useEffect, useState } from "react";
import "../index.css"; 
import { Link } from "react-router-dom"; 
import NavBar from "./NavBar";
import RestaurantDetails from "./RestaurantDetails";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const postsPerPage = 3; 

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  // Pagination logic
  const lastIndex = currPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currPosts = restaurants.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(restaurants.length / postsPerPage);

  return (
    <div> <NavBar />
    <div className="container">
      
      <h1 className="text-3xl font-bold text-center mt-1 mb-6 text-gray-800 heading">🍽️ Restaurants List</h1>

      {/* Grid container */}
      <div className="restaurant-grid ">
        {currPosts.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img 
              src={restaurant.photo_url} 
              alt={restaurant.name} 
              className="w-full h-64 md:h-80 overflow-hidden image"
            />

            <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="restaurant-info">📍 {restaurant.city}</p>
            {restaurant.rating && (
              <p className="restaurant-info">⭐ {restaurant.rating}</p>
            )}
            <Button href={`/restaurants/${restaurant._id}`} variant="outlined">
              View Details
            </Button>
          </div>
        ))}
      </div>

      {/* Material UI Pagination */}
      <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
        <Pagination 
          count={totalPages} 
          page={currPage} 
          onChange={(event, value) => setCurrPage(value)} 
          color="primary"
        />
      </Stack>
    </div>
    </div>
  );
};

export default RestaurantsList;
