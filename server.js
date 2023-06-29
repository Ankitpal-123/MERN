import express from "express";
import dotenv from "dotenv"; //importing env
import connectionDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from "cors";

// config the dotenv file
dotenv.config();

// databaseconnection
connectionDB();

// rest cobect
const app = express();

// middileware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);

// rest app
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the website</h1>");
});

// port
const PORT = process.env.PORT || 8080;

// run the port
app.listen(PORT, () => {
  console.log(`Server running in the $(port)`);
});
