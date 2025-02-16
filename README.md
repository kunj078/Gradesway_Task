﻿# Quizo - Quiz Management System

Quizo is a full-stack Quiz Management System that allows teachers to create, manage, and view quizzes. The project features a modern, responsive frontend built with React and TypeScript, and a robust backend built with Express, TypeScript, and Sequelize connected to a SQL database (MySQL/PostgreSQL).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
## Features

- **Authentication:** Teachers can sign up, log in, and log out using session-based authentication.
- **Quiz Management:** Create, view, update, and delete quizzes.
- **Responsive Design:** Modern UI using ShadCN UI-inspired components and a responsive layout.
- **Session Handling & Security:** Secure password storage with bcrypt and session management using express-session.
- **API Documentation:** Clear RESTful API endpoints for handling quizzes and user authentication.

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - React Router
  - Axios
  - Vite
  - CSS (with ShadCN UI inspiration)
- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Sequelize (ORM for MySQL/PostgreSQL)
  - bcrypt for password hashing
  - express-session for session management
  - dotenv for environment variables
  - cors for Cross-Origin Resource Sharing

## Project Structure

```plaintext
quizo/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   └── quizController.ts
│   │   ├── middleware/
│   │   │   └── authMiddleware.ts
│   │   ├── models/
│   │   │   ├── userModel.ts
│   │   │   └── quizModel.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   └── quizRoutes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── auth.ts
│   │   │   └── quiz.ts
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Navbar.tsx
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── CreateQuiz.tsx
│   │   │   └── EditQuiz.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── tsconfig.json
│
├── .env
└── README.md


Installation & Setup
Backend Setup
    1. Navigate to the backend folder:
        cd backend

    2. Install dependencies:
        npm i

    3. Configure Environment Variables:
    Create a .env file in the backend folder with content similar to:
        DB_HOST=localhost
        DB_NAME=quizo_db
        DB_USER=root
        DB_PASSWORD=your_db_password
        SESSION_SECRET=your_session_secret
        PORT=5000

    4. Database Setup:
        Ensure your MySQL (or PostgreSQL) server is running.
        Create a database named quizo_db (or as specified in your .env).

    5. Start the Backend Server:    
        npm start

Frontend Setup
    1. Navigate to the frontend folder (in a new terminal):
        cd frontend

    2. Install dependencies:
        npm i 

    3. Start the Frontend Development Server:
        npm run dev

Usage:
    1. Open your browser and navigate to the frontend URL.
    2. Sign Up / Login
        Use the signup page to register a new teacher account.
        Log in using your credentials.
    3.Manage Quizzes:
        After logging in, you can create new quizzes, view a list of quizzes, edit existing quizzes, and delete quizzes from your dashboard.

API Endpoints
    Authentication
        POST /api/auth/signup
        Registers a new teacher account.

        POST /api/auth/login
        Logs in an existing teacher.

        POST /api/auth/logout
        Logs out the current teacher.

    Quiz Management

        POST /api/quizzes
        Creates a new quiz.

        GET /api/quizzes
        Retrieves all quizzes for the logged-in teacher.
        
        GET /api/quizzes/:id
        Retrieves a specific quiz by ID.
        
        PUT /api/quizzes/:id
        Updates a quiz by ID.
        
        DELETE /api/quizzes/:id
        Deletes a quiz by ID.
