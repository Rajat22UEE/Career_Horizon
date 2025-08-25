import HRContact from "../models/HRContact.js";
import createError from "../utils/createError.js";

// ➕ Add new HR contact
export const createHRContact = async (req, res, next) => {
  try {
    const hr = new HRContact(req.body);
    await hr.save();
    return res.status(201).json({ success: true, hr });
  } catch (err) {
    next(err);
  }
};

// 📂 Get all HR contacts
export const getHRContacts = async (req, res, next) => {
  try {
    const hrs = await HRContact.find();
    return res.json({ success: true, hrs });
  } catch (err) {
    next(err);
  }
};

// 📂 Get one HR by ID
export const getHRContactById = async (req, res, next) => {
  try {
    const hr = await HRContact.findById(req.params.id);
    if (!hr) return next(createError(404, "HR Contact not found"));
    return res.json({ success: true, hr });
  } catch (err) {
    next(err);
  }
};

// ✏️ Update HR
export const updateHRContact = async (req, res, next) => {
  try {
    const hr = await HRContact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hr) return next(createError(404, "HR Contact not found"));
    return res.json({ success: true, hr });
  } catch (err) {
    next(err);
  }
};

// ❌ Delete HR
export const deleteHRContact = async (req, res, next) => {
  try {
    const hr = await HRContact.findByIdAndDelete(req.params.id);
    if (!hr) return next(createError(404, "HR Contact not found"));
    return res.json({ success: true, message: "HR Contact deleted" });
  } catch (err) {
    next(err);
  }
};
