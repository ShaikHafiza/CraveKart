const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/zomatoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Restaurant = mongoose.model("Restaurant", new mongoose.Schema({}, { strict: false }));

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get("/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant); // ✅ Send JSON response properly
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});
