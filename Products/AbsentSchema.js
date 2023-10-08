import mongoose from "mongoose";

const AbsentSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  picture: {
    type: String,
  },
  Gender: {
    type: "men" | "female",
  },
  contact_phone_number: {
    type: Number,
  },

  last_status: {
    info_source: { type: String },
    date: { type: String },
    found: { type: Boolean, default: false },
    medic_status: { type: String },
    location: { type: String, default: undefined },
  },
});

export const Absent = mongoose.model("Absent", AbsentSchema);
