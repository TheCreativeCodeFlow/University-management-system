import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*", credentials:true }));

// 🔹 Define constants directly (instead of using .env)
const PORT = 5000;
const MONGO_URI = "mongodb+srv://kartikbalaji21:b8Hz7EQyJM898gP5@buzzybotsuserbase.9x2yh.mongodb.net/Login";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
