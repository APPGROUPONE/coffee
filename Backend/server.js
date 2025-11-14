import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mpesaRoutes from "./routes/mpesa.js";

dotenv.config();
const app = express();

// ------------------- CORS -------------------
// Allow requests from React frontend (localhost:3000)
app.use(cors({
  origin: "http://localhost:3000", // React dev server URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ------------------- Middleware -------------------
app.use(bodyParser.json());

// ------------------- Routes -------------------
app.use("/api", mpesaRoutes);

// ------------------- DB & Server -------------------
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));
