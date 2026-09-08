<h1 align="center">💼 JobStack — Full-Stack MERN Job Portal</h1>

<p align="center">
  <b>🚀 Empowering Careers. Simplifying Hiring.</b>
</p>

<p align="center">
  A modern, secure and scalable MERN-based job portal connecting job seekers with recruiters.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-REST%20API-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Authentication-orange?logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite" />
</p>

---

## 📌 Overview

**JobStack** is a full-stack **MERN Job Portal** designed to streamline the recruitment process for both **Job Seekers** and **Recruiters**.

The platform enables recruiters to create and manage job postings, while job seekers can discover relevant opportunities, apply for jobs, and track their applications through an intuitive and responsive interface.

The application follows a **3-tier client-server architecture**, where a React frontend communicates with a Node.js/Express backend through **RESTful APIs**, with MongoDB serving as the persistent data layer.

### 🎯 Core Objective

> Build a secure, scalable and user-friendly recruitment platform that simplifies job discovery, hiring and application management.

---

# 🏗️ System Architecture

JobStack follows a **3-tier client-server architecture**:

                         👤 USERS
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
          👨‍💻 JOB SEEKER         🧑‍💼 RECRUITER
                 │                     │
                 └──────────┬──────────┘
                            │
                            ▼
              ┌─────────────────────────────┐
              │      🎨 REACT FRONTEND      │
              │                             │
              │  • User Interface           │
              │  • Authentication           │
              │  • Job Search & Listings    │
              │  • Applications             │
              │  • Recruiter Dashboard      │
              │  • Redux State Management   │
              └──────────────┬──────────────┘
                             │
                       HTTP / REST API
                             │
                             ▼
              ┌─────────────────────────────┐
              │   ⚙️ NODE.JS + EXPRESS      │
              │                             │
              │  • REST API                 │
              │  • Controllers              │
              │  • Business Logic           │
              │  • Authentication           │
              │  • Authorization            │
              └──────────────┬──────────────┘
                             │
                        Mongoose ODM
                             │
                             ▼
              ┌─────────────────────────────┐
              │        🍃 MONGODB           │
              │                             │
              │  • Users                    │
              │  • Companies                │
              │  • Jobs                     │
              │  • Applications             │
              └─────────────────────────────┘

---

# 🔄 Request Flow

User Action
     ↓
React Component
     ↓
Redux / Axios
     ↓
REST API Request
     ↓
Express Server
     ↓
Controller
     ↓
Mongoose Model
     ↓
MongoDB
     ↓
JSON Response
     ↓
Redux / React State
     ↓
Updated UI

This separation of concerns makes the application **modular, maintainable and easier to scale**.

---

# 🧩 Project Architecture

JobStack/
│
├── 📁 backend/
│   │
│   ├── 📁 controllers/
│   │   └── Business logic & request handling
│   │
│   ├── 📁 models/
│   │   └── MongoDB schemas using Mongoose
│   │
│   ├── 📁 utils/
│   │   └── Reusable backend utilities
│   │
│   └── 📄 TESTING DATA
│       └── Development / testing data
│
├── 📁 frontend/
│   │
│   ├── 📁 public/
│   │   └── Static assets
│   │
│   ├── 📁 src/
│   │   ├── Components
│   │   ├── Pages
│   │   ├── State Management
│   │   ├── API Integration
│   │   └── UI Logic
│   │
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 📄 index.html
│
├── 📄 .gitignore
└── 📄 README.md

### 🧱 Architectural Responsibilities

| Layer | Responsibility |
|---|---|
| 🎨 React | UI rendering and user interaction |
| 🔄 Redux Toolkit | Global application state |
| 🌐 Axios | Frontend ↔ Backend communication |
| 🚀 Express | REST API and HTTP request handling |
| 🧠 Controllers | Application and business logic |
| 🧩 Mongoose | Data modeling and MongoDB interaction |
| 🍃 MongoDB | Persistent data storage |
| 🔐 JWT | Authentication and authorization |

---

# ✨ Key Features

## 👨‍💻 Job Seeker Features

- 🔐 Secure registration and login
- 🔍 Search and browse available jobs
- 📄 View detailed job descriptions
- 📤 Apply for jobs
- 📊 Track application status
- 🏢 Explore company information
- 📱 Responsive user interface

## 🧑‍💼 Recruiter Features

- 🔐 Secure recruiter authentication
- 🏢 Manage company profile
- ➕ Create job postings
- ✏️ Edit existing jobs
- 🗑️ Delete job postings
- 📋 Manage posted jobs
- 👥 Manage candidate applications
- 📊 Recruiter dashboard

---

# 🔐 Authentication & Authorization

JobStack implements **JWT-based authentication** to secure user sessions and protected APIs.

Login / Register
       ↓
Credentials Validation
       ↓
JWT Token Generation
       ↓
Authentication State
       ↓
Authenticated API Request
       ↓
Backend Token Validation
       ↓
Role-Based Authorization
       ↓
Protected Resource

### 🛡️ Role-Based Access Control

The application separates functionality according to user roles:

                    👤 USER
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
       🧑‍💼 RECRUITER       👨‍💻 JOB SEEKER
              │                 │
              ▼                 ▼
        Manage Jobs        Search Jobs
        Applications       Apply Jobs
        Company Profile    Track Applications
        Dashboard

This ensures users can access only the functionality relevant to their role.

---

# 🌐 REST API Architecture

The backend follows a **RESTful API architecture**.

Frontend
   │
   │ HTTP Request
   ▼
Express API
   │
   ▼
Controller
   │
   ▼
Mongoose Model
   │
   ▼
MongoDB
   │
   ▼
JSON Response
   │
   ▼
Frontend

### 📌 Example: Authentication Flow

`POST /api/auth/login`

Login Request
     ↓
Authentication Controller
     ↓
Validate User Credentials
     ↓
Generate JWT
     ↓
Return Authentication Response

### 📌 Example: Creating a Job

`POST /api/jobs`

Recruiter
    ↓
React Frontend
    ↓
Axios
    ↓
Express API
    ↓
Authentication / Authorization
    ↓
Job Controller
    ↓
Job Model
    ↓
MongoDB

---

# 🗄️ Data Model

The backend uses **MongoDB + Mongoose** for data persistence.

The major entities include:

┌──────────────┐
│     👤 User  │
└──────┬───────┘
       │
       │ creates / manages
       ▼
┌──────────────┐
│    💼 Job    │
└──────┬───────┘
       │
       │ receives
       ▼
┌───────────────┐
│ 📄 Application │
└──────┬────────┘
       │
       │ submitted by
       ▼
┌──────────────┐
│ 👨‍💻 Job Seeker│
└──────────────┘

       │
       │ associated with
       ▼
┌──────────────┐
│ 🏢 Company   │
└──────────────┘

This entity-based design keeps users, companies, jobs and applications logically separated while maintaining relationships between them.

---

# 🎨 Frontend Architecture

The frontend is built using **React.js** and follows a component-based architecture.

                 ⚛️ REACT APPLICATION
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
     🧩 Components    📄 Pages     🔄 Redux
          │              │              │
          └──────────────┼──────────────┘
                         │
                         ▼
                   🌐 Axios
                         │
                         ▼
                  REST API / Backend

### Frontend Responsibilities

- ⚛️ Component-based UI development
- 🔄 Global state management using Redux Toolkit
- 🌐 API communication using Axios
- 🔐 Authentication state management
- 🔍 Job search and filtering
- 📄 Application management
- 🧑‍💼 Recruiter dashboard
- 📱 Responsive design

---

# ⚙️ Backend Architecture

The backend follows a modular structure:

backend/
│
├── controllers/
│       ↓
│   Business Logic
│
├── models/
│       ↓
│   Database Schemas
│
└── utils/
        ↓
    Reusable Utilities

### 🎯 Why This Architecture?

- ✅ Separation of concerns
- ✅ Easier debugging
- ✅ Reusable modules
- ✅ Better maintainability
- ✅ Easier feature expansion
- ✅ Improved scalability
- ✅ Clear responsibility between layers

---

# 🛠️ Tech Stack

## 🎨 Frontend

- ⚛️ **React.js**
- 🔄 **Redux Toolkit**
- 🌐 **Axios**
- 🎨 **CSS / Tailwind CSS**
- ⚡ **Vite**

## ⚙️ Backend

- 🟢 **Node.js**
- 🚀 **Express.js**
- 🧩 **Mongoose**
- 🔑 **JWT Authentication**
- 🌐 **REST APIs**

## 🗄️ Database

- 🍃 **MongoDB**

## 🧰 Development Tools

- 🐙 Git & GitHub
- 💻 VS Code
- 📦 npm
- 🔎 Postman / Thunder Client

---

# 📂 Repository Structure

job-stack/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── utils/
│   └── TESTING DATA
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

`git clone https://github.com/NasimAhmedKazi/job-stack.git`

`cd job-stack`

## 2️⃣ Install Backend Dependencies

`cd backend`

`npm install`

## 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` directory:

`PORT=5000`

`MONGO_URI=your_mongodb_connection_string`

`JWT_SECRET=your_jwt_secret`

> ⚠️ Never commit `.env` files, database credentials or API secrets to GitHub.

## 4️⃣ Start the Backend

`npm run dev`

Backend:

`http://localhost:5000`

## 5️⃣ Install Frontend Dependencies

`cd ../frontend`

`npm install`

## 6️⃣ Start the Frontend

`npm run dev`

The Vite development server will provide the frontend URL.

---

# 📈 Scalability Considerations

JobStack is structured with scalability and maintainability in mind.

### 🔹 Modular Backend

Controllers, models and utilities are separated, making it easier to add new modules without affecting the entire application.

### 🔹 RESTful APIs

The frontend and backend communicate through APIs, allowing both layers to evolve independently.

### 🔹 Role-Based Architecture

Recruiter and job-seeker functionality is logically separated, making it easier to introduce additional roles in the future.

### 🔹 Database Abstraction

Mongoose provides structured data models and simplifies interaction with MongoDB.

### 🔹 Reusable React Components

Component-based development reduces duplication and makes the frontend easier to extend.

### 🚀 Potential Production Enhancements

Future scalability improvements could include:

- ⚡ Redis caching
- 🔎 Elasticsearch for advanced job search
- 📩 Email notification services
- ☁️ Cloud-based resume storage
- 📊 Advanced recruiter analytics
- 🐳 Docker containerization
- ⚖️ Load balancing
- 🔄 CI/CD pipelines
- ☁️ Cloud deployment
- 📈 Database indexing and optimization

---

# 🔒 Security Considerations

JobStack follows security-focused development practices:

- 🔑 JWT-based authentication
- 👥 Role-based authorization
- 🔐 Environment-based secret management
- 🛡️ Protected API endpoints
- 🧹 Input validation
- 🚫 Sensitive credentials excluded from version control
- 🔒 Separation of authentication and application logic

---

# 🧪 Testing

The backend includes testing/development data for application testing.

API testing can be performed using:

- 🧪 Postman
- 🧪 Thunder Client

### Testing Areas

Authentication
     ↓
Authorization
     ↓
Job CRUD Operations
     ↓
Application Management
     ↓
Role-Based Access
     ↓
Error Handling

---

# 💡 Engineering Highlights

This project demonstrates practical experience with:

- 🏗️ Full-stack web application architecture
- 🌐 REST API design
- 🔐 Authentication & authorization
- 👥 Role-Based Access Control
- 🍃 MongoDB data modeling
- 🧩 Mongoose ODM
- ⚛️ React component architecture
- 🔄 Redux Toolkit state management
- 🌐 Axios API integration
- 🚀 Express.js backend development
- 📱 Responsive UI development
- 🧱 Modular code organization
- 📈 Scalability-oriented design
- 🐙 Git/GitHub version control

---

# 🔮 Future Enhancements

## 🤖 Intelligent Job Recommendations

Recommend relevant jobs based on:

- Candidate skills
- Experience
- Job preferences
- Previous applications

## 📧 Email Notifications

Notify candidates and recruiters about:

- Application submissions
- Application status updates
- New job postings
- Recruitment activities

## 📊 Advanced Analytics

Recruiters could get insights into:

- 📈 Application statistics
- 👥 Candidate trends
- 💼 Job performance
- 📊 Hiring analytics

## 🔎 Advanced Job Search

Add filtering and sorting by:

- 📍 Location
- 💰 Salary
- 🧑‍💻 Experience
- 🏷️ Job Type
- 🛠️ Skills
- 🏢 Company

---

# 📸 Application Screenshots

Add screenshots/GIFs of the following sections to showcase the application:

- 🏠 Landing Page
- 🔐 Login / Registration
- 🔍 Job Search
- 💼 Job Details
- 📄 Application Page
- 🧑‍💼 Recruiter Dashboard
- 🏢 Company Profile

### 📸 Application Preview

![JobStack Landing Page](https://jobstackfrontend-m206nia4d-nasim-ahmed-kazis-projects.vercel.app/)

![Job Search](./screenshots/jobs.png)

![Recruiter Dashboard](./screenshots/recruiter-dashboard.png)

---

# 🎓 What I Learned

Building JobStack provided hands-on experience in designing and developing a complete full-stack application.

### Key Takeaways

> 🧠 Designing scalable application architecture  
> 🔐 Implementing authentication and authorization  
> 🌐 Building RESTful APIs  
> 🍃 Working with MongoDB and Mongoose  
> ⚛️ Managing application state with Redux Toolkit  
> 🔄 Connecting frontend and backend systems  
> 🧩 Structuring a maintainable codebase  
> 📱 Building responsive interfaces  
> 🚀 Thinking about scalability and production readiness

---

# 🤝 Contributing

Contributions, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to your branch
6. Open a Pull Request

---

# ⭐ Support

If you found **JobStack** useful or interesting, consider giving the repository a ⭐.

Your support motivates further development!

---

<p align="center">

## 🚀 Built with ❤️ using the MERN Stack

### 💼 JobStack — Empowering Careers. Simplifying Hiring.

</p>

