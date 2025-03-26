import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MyProfile from "../pages/MyProfile";
import MyAppointments from "../pages/MyAppointments";
import Appointment from "../pages/Appointment";
import MainLayout from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctors/speciality",
        element: <Doctors />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/my-appointments",
        element: <MyAppointments />,
      },
      {
        path: "/appointment/:doctorId",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
