import { Outlet } from "react-router-dom";
import DasNavbar from "../../components/ForDashboard/DasNavbar";
import Sidebar from "../../components/ForDashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-[#F8F9FD] h-screen max-h-screen flex flex-col">
      <DasNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* Main content area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
