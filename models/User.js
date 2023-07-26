import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
// FIELD LIST: username, password, profile picture, bio, followers, following
const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  //   use bcryp to create a password https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1, https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  profilePicture: {
    data: Buffer,
    contentType: String,
    //have to use Multer on the data entry https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
  },
  bio: {
    type: String,
    maxLength: 150,
  },
  //referencing the user schema because it will be an array of objects that will be an array
  //https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose
});
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 50;
    this.password = hash(this.password, saltRounds);
  }

  next();
});
//to check to make sure the correct password
userSchema.methods.isCorrectPassword = async function (password) {
  return compare(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;
