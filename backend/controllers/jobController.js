import Job from "../models/Job.js";
import createError from "../utils/createError.js";

// ➕ Add Job
export const createJob = async (req, res, next) => {
  try {
    const job = new Job(req.body);
    await job.save();
    return res.status(201).json({ success: true, job });
  } catch (err) {
    next(err);
  }
};

// 📂 Get All Jobs
export const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    return res.json({ success: true, jobs });
  } catch (err) {
    next(err);
  }
};

// 📂 Get One Job
export const getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return next(createError(404, "Job not found"));
    return res.json({ success: true, job });
  } catch (err) {
    next(err);
  }
};

// ✏️ Update Job
export const updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) return next(createError(404, "Job not found"));
    return res.json({ success: true, job });
  } catch (err) {
    next(err);
  }
};

// ❌ Delete Job
export const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return next(createError(404, "Job not found"));
    return res.json({ success: true, message: "Job deleted" });
  } catch (err) {
    next(err);
  }
};
