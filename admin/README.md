### 2. Admin Folder: `career-horizon/admin/README.md`

```markdown
# 🔒 Career Horizon - Admin Panel

This is the admin panel for the Career Horizon platform, built with Next.js and Tailwind CSS. It provides a secure and user-friendly interface for managing the website's content.

---

## ✨ Features

* **Secure Authentication:** Admins must log in using JWT-based authentication.
* **Dashboard:** An overview of the platform's content.
* **Jobs Management:** Add, edit, and delete job postings.
* **Internships Management:** Add, edit, and delete internship listings.
* **HR Contacts Management:** Manage a list of HR contacts for users.
* **Admin Management:** Add or remove other administrators.

---

## 🚀 Local Development

### 1. Navigate to the Admin Directory
```bash
# From the root of the project
cd admin
2. Install Dependencies
If you haven't already installed from the root, run:

Bash

npm install
3. Set Up Environment Variables
Create a .env.local file in this directory (/admin) and add the following variable. This URL points to your running backend API.

Code snippet

NEXT_PUBLIC_API_URL=http://localhost:5000/api
4. Run the Development Server
Bash

npm run dev
The admin panel will be available at http://localhost:3001.