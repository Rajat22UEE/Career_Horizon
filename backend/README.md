### 3. Backend Folder: `career-horizon/backend/README.md`

```markdown
# ⚙️ Career Horizon - Backend API

This directory contains the backend server for Career Horizon, built with Node.js, Express, and MongoDB. It functions as a RESTful API to handle all data operations and authentication logic.

---

## 🌟 Features

* **RESTful API:** Clean and predictable API endpoints.
* **Authentication:** Secure JWT-based authentication for admin routes.
* **Database Models:** Mongoose schemas for Jobs, Internships, HR Contacts, and Admins.
* **MVC Architecture:** Organized structure with Models, Routes, and Controllers.
* **Middleware:** Centralized functions for authentication and input validation.
* **Error Handling:** Global error handler for consistent API responses.

---

## ↔️ API Endpoints

Here are the primary API routes. Protected routes require a valid JWT token.

* `POST /api/admins/login` - Login an admin.
* `GET /api/jobs` - Fetch all jobs.
* `POST /api/jobs` - Create a new job (Protected).
* `PUT /api/jobs/:id` - Update a job (Protected).
* `DELETE /api/jobs/:id` - Delete a job (Protected).
* _(Similar routes exist for internships and hr-contacts)_

---

## 🚀 Local Development

### 1. Navigate to the Backend Directory
```bash
# From the root of the project
cd backend
2. Install Dependencies
If you haven't installed from the root, run:

Bash

npm install
3. Set Up Environment Variables
Create a .env file in this directory (/backend) and add the following:

Code snippet

# Your MongoDB connection string (local or from Atlas)
MONGO_URI=your_mongodb_connection_string

# A secret key for signing JWTs
JWT_SECRET=your_super_secret_jwt_key

# The port for the server to run on
PORT=5000
4. Run the Development Server
This command uses nodemon to automatically restart the server on file changes.

Bash

npm run dev
The API server will be live at http://localhost:5000.