# CivicFix 🚧

> A citizen-focused civic complaint management web application for reporting, managing, and tracking local civic issues.

CivicFix is a **React-based civic complaint management application** designed to make reporting local issues more organized and accessible.

Citizens can report problems such as **potholes, broken streetlights, garbage overflow, and other civic issues**, provide relevant details and image evidence, and track the status of their complaints.

The current version focuses on the **frontend experience and client-side functionality**. Backend APIs, database integration, authentication, real-time features, and other production functionality are planned for the next development phase.

---

## ✨ Features

### 👤 Citizen Dashboard

* Overview of submitted complaints
* Complaint statistics
* Quick access to complaint-related actions

### 📝 Create Complaint

* Complaint category selection
* Issue description
* Location details
* Priority selection
* Image upload
* Image preview and removal
* Form validation

### 📋 My Complaints

* View submitted complaints
* Search complaints
* Filter complaints
* View individual complaint details

### 🔎 Complaint Details

* Complete complaint information
* Issue category
* Description
* Location
* Priority
* Submitted evidence
* Complaint status

### 📊 Complaint Status Timeline

* Visual representation of complaint progress
* Status tracking interface

### 📍 Nearby Issues

* Interface for displaying nearby civic issues
* Designed for future integration with real location/GPS services

### 🔔 Notifications & Profile

* Notifications interface
* User profile interface
* Structured for future authentication and user management

### 🎨 UI & Experience

* Responsive design
* Dark/Light theme
* Reusable React components
* Client-side navigation
* Clean and accessible interface

---

## 🛠️ Tech Stack

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| **React 19**          | Frontend UI development                |
| **Vite**              | Development server and build tool      |
| **JavaScript (ES6+)** | Application logic                      |
| **Tailwind CSS v4**   | Styling and responsive UI              |
| **React Router**      | Client-side routing                    |
| **localStorage**      | Client-side complaint data persistence |
| **HTML / JSX**        | Application structure                  |

---

## 🏗️ Current Architecture

The current version is a **frontend-only application**.

```text
CivicFix
│
├── React Application
│   ├── Dashboard
│   ├── Create Complaint
│   ├── My Complaints
│   ├── Complaint Details
│   ├── Nearby Issues
│   ├── Notifications
│   └── Profile
│
├── React Router
│   └── Client-side navigation
│
├── Reusable Components
│
├── Tailwind CSS
│   └── Responsive UI & theming
│
└── localStorage
    └── Client-side complaint persistence
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/heyashissh/CivicFix.git
```

### Navigate to the project

```bash
cd CivicFix
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown by Vite.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 📂 Project Structure

```text
CivicFix/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

> The exact structure may evolve as the project moves toward its full-stack architecture.

---

## 🔄 Application Flow

```text
User
  ↓
Dashboard
  ↓
Create Complaint
  ↓
Enter Issue Details
  ↓
Add Location / Priority / Description
  ↓
Upload Image Evidence
  ↓
Validation
  ↓
Save Complaint
  ↓
My Complaints
  ↓
Search / Filter
  ↓
Complaint Details
  ↓
Track Status
```

---

## 🧪 Current Data Handling

The current version uses **browser localStorage** for client-side complaint persistence.

This allows the application to demonstrate complaint creation, storage, retrieval, searching, filtering, and status tracking without requiring a backend server.

The planned full-stack version will replace this client-side approach with a proper backend API and database.

---

## 🔮 Roadmap

The project is currently under active development.

### Backend

* [ ] Node.js backend
* [ ] Express.js REST APIs
* [ ] MongoDB database
* [ ] Mongoose integration
* [ ] API-based complaint management

### Authentication

* [ ] User registration
* [ ] User login
* [ ] Authentication
* [ ] Authorization
* [ ] Protected routes

### Civic Features

* [ ] Real GPS/location integration
* [ ] Interactive maps
* [ ] Nearby issue detection
* [ ] Authority/admin dashboard
* [ ] Complaint assignment
* [ ] Complaint status updates

### Media & Notifications

* [ ] Cloud image storage
* [ ] Real-time notifications
* [ ] Email notifications

### Production

* [ ] Backend deployment
* [ ] Database deployment
* [ ] Environment configuration
* [ ] Production deployment
* [ ] Accessibility improvements
* [ ] Performance optimization
* [ ] Testing

---

## 🎯 Project Goals

The long-term goal of CivicFix is to evolve from a frontend prototype into a **production-style full-stack civic issue management platform**.

The planned architecture will allow:

```text
Citizen
   ↓
React Frontend
   ↓
REST API
   ↓
Node.js + Express
   ↓
MongoDB
   ↓
Civic Issue Management
   ↓
Authority/Admin Dashboard
```

This will provide a foundation for managing the complete lifecycle of a civic complaint—from submission and verification to assignment, progress tracking, and resolution.

---

## 🧠 What I Learned

While developing CivicFix, I worked on:

* React component architecture
* Reusable components
* React Router
* Form handling and validation
* Client-side data persistence
* Search and filtering
* Image preview handling
* Responsive UI development
* Tailwind CSS
* Dark/Light theme implementation
* Debugging and testing
* Structuring a frontend application for future backend integration

I also used AI tools such as **ChatGPT, Claude, and Gemini as development and learning assistants** to research concepts, understand implementation approaches, debug issues, and improve my development workflow.

The implementation, testing, debugging, and understanding of the project were handled by me.

---

## 📌 Current Status

**🚧 Frontend Development — In Progress**

The frontend currently contains the core user experience and client-side functionality.

The backend, database, authentication, real GPS/maps, authority dashboard, cloud storage, real-time notifications, and production deployment are planned for future development.

---

## 👨‍💻 Developer

**Ashish Shrivastav**

Full Stack Developer in progress | React | JavaScript | Node.js | MongoDB

* GitHub: https://github.com/heyashissh
* LinkedIn: https://www.linkedin.com/in/heyashissh/

---

## 📄 License

This project is currently developed as a personal learning and portfolio project.
