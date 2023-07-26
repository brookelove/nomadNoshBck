import mongoose, { Schema, model } from "mongoose";
import { randomUUID } from "crypto";
// FIELD LIST: name, description, price, food type (e.g., burger, taco), etc.
const menuItemSchema = new Schema({
  id: {
    type: 'UUID',
    default: () => randomUUID()
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  foodType: {
    type: String,
  },
  //used for teh picture of the food will have to create a default picture if not provided dependant on the food type
  profilePicture: {
    data: Buffer,
    contentType: String,
    //have to use Multer on the data entry https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
  },
});

const MenuItem = model("MenuItem", menuItemSchema);
module.exports = MenuItem;
