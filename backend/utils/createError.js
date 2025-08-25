// backend/utils/createError.js
export default function createError(statusCode, message) {
  const error = new Error(message || "Something went wrong");
  error.statusCode = statusCode;
  error.status = statusCode; // ✅ for consistency with Express handlers
  return error;
}
