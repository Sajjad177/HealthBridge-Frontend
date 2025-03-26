import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MyProfile from "../pages/MyProfile";
import MyAppointments from "../pages/MyAppointments";
import Appointment from "../pages/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/doctors",
    element:<Doctors/>
  },
  {
    path: "/doctors/speciality",
    element:<Doctors/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/my-profile",
    element: <MyProfile/>
  },
  {
    path: "/my-appointments",
    element: <MyAppointments/>
  },
  {
    path: "/appointment/:docId",
    element: <Appointment/>
  },
  
]);

export default router;
