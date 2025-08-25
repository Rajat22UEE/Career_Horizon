// File: career_horizon/backend/middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import createError from "../utils/createError.js";

// ✅ Protect middleware: verifies JWT and attaches admin to request
export const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      if (!req.admin) {
        return next(createError(401, "Not authorized, admin not found"));
      }

      return next();
    }

    // If no token in header
    return next(createError(401, "Not authorized, no token"));
  } catch (err) {
    return next(createError(401, "Not authorized, token failed"));
  }
};