# 🏥 Hospital Management System

A full-featured hospital management web application where users can book doctor appointments, make payments, cancel appointments, and manage their profiles. The system includes secure JWT authentication and role-based dashboards for Admins and Doctors. This project is built using the MERN (MongoDB, Express, React, Node.js) stack and supports full CRUD operations across all modules.

---

## 🚀 Project Overview

This Hospital Management System allows users to easily schedule appointments with doctors, make payments, and manage or cancel their bookings. Admins and doctors have access to separate dashboards for managing patients, appointments, and other medical services. The app features secure authentication using JWT, dynamic CRUD operations, and a robust profile management system. It is built using the MERN stack, providing a responsive and efficient user experience.

---

1. User Registration & Login
Users can register and log in with a secure authentication system using JWT (JSON Web Tokens).

Role-based access: Users are assigned roles like Patient, Doctor, or Admin during account creation.

2. Book Doctor Appointment
Patients can browse available doctors.

View doctor details, availability, and select appointment time slots.

Submit appointment requests with payment integration.

3. Payment Integration
Secure online payment system integrated for appointment bookings.

Payment status is recorded and visible in the user dashboard.

4. Appointment Management
Users can view their upcoming and past appointments.

Appointments can be canceled by the user before a certain time.

Doctors can approve/reject appointments from their dashboard.

5. Admin Dashboard
Admin can view and manage all users, doctors, and appointments.

Admin can create, update, or delete doctor profiles.

Full CRUD operations for doctors and appointments.

6. Doctor Dashboard
Doctors can view their own appointments.

Update availability and manage patient appointment statuses.

7. Profile Management
All users (Patients, Doctors, Admins) can update their profile information including name, image, and contact details.

----

## 🧩 Features

- 🔐 JWT Authentication (Login/Register)
- 👤 User profile management
- 🩺 Book doctor appointments
- 💳 Payment integration
- ❌ Cancel appointments
- 📊 Admin Dashboard:
  - Manage users
  - Manage doctors
  - View all appointments
- 🩻 Doctor Dashboard:
  - View appointment list
  - Manage availability
- 🔁 Full CRUD operations
- 📱 Responsive UI (Mobile + Desktop)

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS / CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** Redux / Context API (if used)
- **API Handling:** RESTful APIs
- **Others:** Stripe / SSLCommerz / (any payment API used)

---

---

## ⚙️ Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
cd server
npm install
# Add .env file
npm run dev
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
REACT_APP_API_URL=http://localhost:5000
