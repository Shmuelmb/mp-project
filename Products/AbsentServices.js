import { Absent } from ".AbsentSchema.js";

export const getAllProducts = () => {
  return Absent.find({});
};

export const getAbsent = (id) => {
  return Absent.findOne({ _id: id });
};

export const addAbsent = (absent) => {
  const newProduct = new Absent({});
  return newProduct.save();
};
