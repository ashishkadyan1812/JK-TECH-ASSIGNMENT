NestJS & React Full Stack Application

Overview

This repository contains a full-stack web application built with:

Backend: NestJS (A progressive Node.js framework for building efficient and scalable server-side applications)

Frontend: React.js (A JavaScript library for building user interfaces)

Features

• A login page that lets users sign in with their Google or Facebook account
• A dashboard page that shows a list of the users posts. Only logged-in users can
access this page.
• A create post page that allows users to create new posts. Only logged-in users can
access this page.
• A post detail page that shows the details of a specific post. This page should be
accessible to both logged-in and logged-out users.

Authentication & Authorization (JWT-based for backend, Google OAuth for frontend)

RESTful API with NestJS

State Management with Redux

Database Integration (MongoDB)

Containerization with Docker

Deployment using ECS, launched on fargated(TBD)

Tech Stack

Backend (NestJS)

Node.js & TypeScript

NestJS

Express.js

Database (MongoDB/PostgreSQL/MySQL)

JWT Authentication

TypeORM/Mongoose

Frontend (React.js)

React.js with Hooks

React Router for navigation

Redux Toolkit for state management

repo-root/
├── backend/        # NestJS Backend
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── frontend/       # React Frontend
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md

http://localhost:3000/ -- Backend server 