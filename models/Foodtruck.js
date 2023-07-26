import { Schema, model } from "mongoose";
//FEILD LIST: name, description, location, menu items (array), owner (reference to User model), images/videos (array), ratings, reviews
const foodTruckSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  menuItems: {
    type: [menuSchema],
  },
  location: {
    type: String,
  },
  owner: {
    type: [User],
  },
  posts: {
    type: [Nosh],
  },
  ratings: {
    type: Number,
  },
  reviews: [Review],
});
const FoodTruck = model("FoodTruck", foodTruckSchema);
module.exports = FoodTruck;
