import express from "express";
import User from "../models/User.js"; // Import User model
import { Navigate } from "react-router-dom";

const router = express.Router();

// 🔹 Login Route (Check if User Exists and Credentials Match)
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log("🔍 Checking for user with email:", email); // Debug log
  
      const user = await User.findOne({ email });
  
      if (!user) {
        console.log("❌ User not found in DB");
        return res.status(404).json({ message: "User not found" });
      }
  
      console.log("✅ User found:", user);
  
      if (user.password !== password) {
        console.log("❌ Invalid password entered");
        return res.status(401).json({ message: "Invalid password" });
      }
  
      res.status(200).json({ message: "Login successful", userId: user._id });

    } catch (error) {
      console.log("🔥 Error in login route:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  

export default router;
