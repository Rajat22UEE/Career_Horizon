// backend/utils/errorHandler.js
const errorHandler = (err, req, res, next) => {
  // Ensure we always have a valid error object
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server Error";

  // Log for debugging
  console.error("❌ Error:", err.stack || err);

  res.status(statusCode).json({
    success: false,
    message,
    // Only expose stack trace in development
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
