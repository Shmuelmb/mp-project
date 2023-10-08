import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  Password: {
    type: String,
    minLength: 20,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  DateCreated: {
    type: Date,
    default: Date.now(),
  },
});

export const Users = mongoose.model("Users", UsersSchema);
