// backend/config/seedAdmin.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function seedAdmin() {
  try {
    await mongoose.connect(MONGO_URI);

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    const name = "Super Admin";

    if (!email || !password) {
      console.error("❌ ADMIN_EMAIL or ADMIN_PASSWORD not set in .env");
      process.exit(1);
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    // ✅ FIX: hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({ name, email, password: hashedPassword });

    console.log("✅ Admin seeded successfully");
    console.log("Admin details:", { email: admin.email, passwordHash: admin.password });

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding admin:", err.message);
    process.exit(1);
  }
}

seedAdmin();
