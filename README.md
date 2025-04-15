# 🏥 Hospital Management System 
### 🌐 [Live Demo](https://health-bridge-frontend-jet.vercel.app)  

A full-featured hospital management web application where users can book doctor appointments, make payments, cancel appointments, and manage their profiles. The system includes secure JWT authentication and role-based dashboards for Admins and Doctors. This project is built using the **MERN stack (MongoDB, Express.js, React, Node.js)** and supports full **CRUD operations** across all modules.

---

## 🚀 Project Overview

The Hospital Management System allows users to seamlessly:

- Book doctor appointments
- Make secure payments
- Cancel or manage bookings
- Update personal profiles

Admins and doctors have access to separate dashboards for managing patients, appointments, availability, and more. The application includes JWT-based authentication, real-time appointment tracking, and a clean responsive UI optimized for all devices.

---

## 🔄 System Workflow

### 1. 👥 User Registration & Login
- Secure user authentication using **JWT (JSON Web Tokens)**
- Role-based access control (Patient, Doctor, Admin)

### 2. 🩺 Book Doctor Appointments
- Browse available doctors with details and schedule
- Choose time slots and submit appointment requests
- Integrated payment during booking

### 3. 💳 Payment Integration
- Secure online payment for appointments
- Payment history is visible in the user dashboard

### 4. 📆 Appointment Management
- Patients can view upcoming and past appointments
- Option to cancel appointments before the scheduled time
- Doctors can approve or reject appointments

### 5. 🛠️ Admin Dashboard
- Manage all users, doctors, and appointments
- Add, edit, or remove doctor profiles
- Full CRUD operations for doctors and appointments

### 6. 🩻 Doctor Dashboard
- View assigned appointments
- Manage availability and patient appointment statuses

### 7. 👤 Profile Management
- All users can update their profile info including name, image, and contact details

---

## 🧩 Features

- 🔐 JWT Authentication (Login/Register)
- 👤 User Profile Management
- 🩺 Doctor Appointment Booking
- 💳 Payment Gateway Integration
- ❌ Cancel Appointments
- 📊 Admin Dashboard
  - Manage Users
  - Manage Doctors
  - View All Appointments
- 🩻 Doctor Dashboard
  - View Appointment List
  - Manage Availability
- 🔁 Full CRUD Operations
- 📱 Responsive Design (Mobile + Desktop)

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS / Custom CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** Redux Toolkit / Context API (based on implementation)
- **API Communication:** RESTful API
- **Payment Gateway:** Stripe / SSLCommerz / Other (based on integration)

---

## ⚙️ Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
```
### 2. Install Server Dependencies

```bash
  cd server
  npm install
```
### 3. Create a .env File in the Server Directory
  ```bash
    PORT=5000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    REACT_APP_API_URL=http://localhost:5000
```
### 4. Run the Server
  ```bash
    npm run dev
  ```
