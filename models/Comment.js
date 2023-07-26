import { Schema, model } from "mongoose";
//FIELD LIST:  follower (reference to User model), following (reference to User model)
const commentSchema = new Schema({
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comment: {
    type: String,
    require: true,
  },
});
const Comment = model("User", commentSchema);
module.exports = Comment;
