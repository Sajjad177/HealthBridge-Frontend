import AddDoctor from "../pages/Dashboard/Admin/AddDoctor";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import AllApointment from "../pages/Dashboard/Admin/AllApointment";
import DoctorList from "../pages/Dashboard/Admin/DoctorList";
import DoctorAppointment from "../pages/Dashboard/Doctor/DoctorAppointment";
import DoctorDashboard from "../pages/Dashboard/Doctor/DoctorDashboard";
import DoctorProfile from "../pages/Dashboard/Doctor/DoctorProfile";

const dashbardRouters = [
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/dashboard/add-doctor",
    element: <AddDoctor />,
  },
  {
    path: "/dashboard/doctor-list",
    element: <DoctorList />,
  },
  {
    path: "/dashboard/all-appointments",
    element: <AllApointment />,
  },
  // doctor routes------------
  {
    path: "/dashboard/docAppointment",
    element: <DoctorAppointment />,
  },
  {
    path: "/dashboard/docProfile",
    element: <DoctorProfile />,
  },
  {
    path: "/dashboard/doc",
    element: <DoctorDashboard />,
  },
];

export default dashbardRouters;
