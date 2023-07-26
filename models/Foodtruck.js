import { Schema, model } from "mongoose";
import { randomUUID } from "crypto";
//FEILD LIST: name, description, location, menu items (array), owner (reference to User model), images/videos (array), ratings, reviews
const foodTruckSchema = new Schema({
  id: {
    type: "UUID",
    default: () => randomUUID(),
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
  location: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // images and videos are posts
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Nosh",
    },
  ],
  ratings: {
    type: Number,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
const FoodTruck = model("FoodTruck", foodTruckSchema);
module.exports = FoodTruck;
