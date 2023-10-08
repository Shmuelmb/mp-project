import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import UsersRoutes from "./Routes/UsersRoutes.js";
// import ProductsRoutes from "./Routes/ProductsRoutes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//dotenv
dotenv.config();
const { PORT, DB_PASS, DB_USER, DB_HOST, DB_NAME } = process.env;

// //express and cors
const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static("client/dist"));
// app.use("/api/users", UsersRoutes);
// app.use("/api/products", ProductsRoutes);

// //mongoose
mongoose.set("strictQuery", false);

mongoose
  .connect(`mongodb://127.0.0.1:27017/absent-project`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(3000, () => console.log("Server listening to port 3000"))
  )
  .catch((err) => console.log(err));
