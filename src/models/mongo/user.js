import Mongoose from "mongoose";

const { Schema } = Mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export const User = Mongoose.model("User", userSchema);

const adminSchema = new Schema({
  email: String,
  password: String
})

export const adminUser = Mongoose.model("Admin", adminSchema);