import { Schema, model } from "mongoose";
//FIELD_LIST: name

const tagSchema = new Schema({
  tagName: {
    type: String,
    unique: true,
  },
});
const Tag = model("Tag", tagSchema);
module.exports = Tag;
