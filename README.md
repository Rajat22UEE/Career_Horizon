# 🚀 Career Horizon - Full-Stack Job & Internship Portal

Welcome to Career Horizon! This is a full-stack monorepo project designed to connect students and professionals with job and internship opportunities. The platform is divided into three core components: a user-facing frontend, a secure admin panel, and a robust backend API.

---

## 🏛️ Project Architecture

The project follows a clean, decoupled architecture:

* **Backend (`/backend`):** A Node.js/Express REST API that serves data, handles business logic, and manages the MongoDB database. It's the single source of truth.
* **Admin Panel (`/admin`):** A Next.js application providing a secure dashboard for administrators to perform CRUD (Create, Read, Update, Delete) operations on jobs, internships, and HR contacts.
* **Frontend (`/frontend`):** A public-facing Next.js application where users can browse and search for opportunities listed by the admins.

**Data Flow:**
`Admin Panel ↔️ Backend API ↔️ Frontend`

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js, MongoDB (with Mongoose), JSON Web Tokens (JWT) for authentication.
* **Frontend & Admin Panel:** Next.js (App Router), React, Tailwind CSS.
* **Deployment:** Vercel (for Frontend & Admin), Render (for Backend).

---

## ⚙️ Getting Started

Follow these steps to set up and run the entire project locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/](https://github.com/)<your-username>/career-horizon.git
cd career-horizon
2. Install Dependencies
This command will install dependencies for all workspaces (frontend, admin, and backend) from the root directory.

Bash

npm install
3. Configure Environment Variables
Create the required .env files for each part of the application.

Backend (/backend/.env):

Code snippet

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
Frontend (/frontend/.env.local):

Code snippet

NEXT_PUBLIC_API_URL=http://localhost:5000/api
Admin Panel (/admin/.env.local):

Code snippet

NEXT_PUBLIC_API_URL=http://localhost:5000/api
4. Run the Project
You can run all applications concurrently using the scripts from the root package.json.

Run Backend Server:

Bash

npm run dev:backend
# Server will run on http://localhost:5000
Run Frontend App:

Bash

npm run dev:frontend
# App will run on http://localhost:3000
Run Admin Panel:

Bash

npm run dev:admin
# App will run on http://localhost:3001