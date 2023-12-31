import { Schema, model } from "mongoose";
//FIELD LIST:  follower (reference to User model), following (reference to User model)
const followSchema = new Schema({
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const Follow = model("User", followSchema);
module.exports = Follow;
