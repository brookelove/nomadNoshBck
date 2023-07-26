import { Schema, model } from "mongoose";
//FIELD LIST: user (reference to User model), food truck (reference to Food Truck model)
const likeSchema = new Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  foodTruck: {
    type: Schema.Types.ObjectId,
    ref: "FoodTruck",
  },
});

const Like = ("Like", likeSchema);
module.exports = Like;
