import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "../index.css"; 

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((error) => console.error("Error fetching restaurant:", error));
  }, [id]);

  if (!restaurant) return <Typography align="center" variant="h6">Loading...</Typography>;

  return (
    <div className="restaurant-container">
      <Card className="restaurant-card">

     
      <h2 className="restaurant-name text">{restaurant.name}</h2>
        {/* Restaurant Image */}
        <CardMedia
          component="img"
          height="200"
          image={restaurant.photo_url || "https://via.placeholder.com/400"}
          alt={restaurant.name}
          className="restaurant-image"
        />

        <CardContent className="text">
          
          <p variant="body2" > City : 📍 {restaurant.city}</p>
          <p variant="body2" > Address : 📍 {restaurant.address}</p>
          <p variant="body2"> Cuisines : 🍽️ {restaurant.cuisines}</p>
          <p variant="body2"> Cost for Two: 💰 ${restaurant.average_cost_for_two}</p>
          <p variant="body2"> Rating : ⭐ {restaurant.rating || "N/A"}</p>
          <p variant="body2">{restaurant.description}</p>

          {/* Back Button */}
          <Button
            sx={{ backgroundColor: "#FF6363", "&:hover": { backgroundColor: "#FF6363" }}}
            variant="contained"
            color="#FF6363"
            href="/restaurants"
            className="back-button"
          >
            ← Back to Restaurants
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantDetails;
