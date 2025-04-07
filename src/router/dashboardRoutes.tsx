import AddDoctor from "../pages/Dashboard/Admin/AddDoctor";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import AllApointment from "../pages/Dashboard/Admin/AllApointment";
import DoctorList from "../pages/Dashboard/Admin/DoctorList";


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
];

export default dashbardRouters;
