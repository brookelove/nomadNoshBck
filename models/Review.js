import { Schema, model } from "mongoose";
//FIELD LIST:  content, rating, author (reference to User model), food truck (reference to Food Truck model)
const reviewSchema = new Schema({
  content: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Review = model("Review", reviewSchema);
module.exports = Review;
