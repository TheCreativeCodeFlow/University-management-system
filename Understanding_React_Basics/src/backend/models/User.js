import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  password: String, // No hashing, just storing as plain text
});

export default model("User", UserSchema);
