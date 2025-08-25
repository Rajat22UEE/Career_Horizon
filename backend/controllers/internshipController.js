import Internship from "../models/Internship.js";
import createError from "../utils/createError.js";

// ➕ Add Internship
export const createInternship = async (req, res, next) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    return res.status(201).json({ success: true, internship });
  } catch (err) {
    next(err);
  }
};

// 📂 Get All Internships
export const getInternships = async (req, res, next) => {
  try {
    const internships = await Internship.find();
    return res.json({ success: true, internships });
  } catch (err) {
    next(err);
  }
};

// 📂 Get One Internship
export const getInternshipById = async (req, res, next) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) return next(createError(404, "Internship not found"));
    return res.json({ success: true, internship });
  } catch (err) {
    next(err);
  }
};

// ✏️ Update Internship
export const updateInternship = async (req, res, next) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!internship) return next(createError(404, "Internship not found"));
    return res.json({ success: true, internship });
  } catch (err) {
    next(err);
  }
};

// ❌ Delete Internship
export const deleteInternship = async (req, res, next) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) return next(createError(404, "Internship not found"));
    return res.json({ success: true, message: "Internship deleted" });
  } catch (err) {
    next(err);
  }
};
