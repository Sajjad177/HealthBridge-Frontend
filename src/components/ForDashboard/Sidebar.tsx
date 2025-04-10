import { NavLink } from "react-router-dom";
import { adminAssets } from "../../assets/assets_admin/adminAssets";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-white border-r">
      {/* show there logic if role is admin then show this sidebar */}
      <ul className="text-[#515151] mt-5">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.home_icon} alt="" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>

        <NavLink
          to="/dashboard/all-appointments"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.appointment_icon} alt="" />
          <p className="hidden md:block">Appointment</p>
        </NavLink>

        <NavLink
          to="/dashboard/add-doctor"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.add_icon} alt="" />
          <p className="hidden md:block">Add Doctors</p>
        </NavLink>

        <NavLink
          to="/dashboard/doctor-list"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.people_icon} alt="" />
          <p className="hidden md:block">Doctors List</p>
        </NavLink>
      </ul>

      {/* add login if role is doctor then show this sidebar */}
      <ul className="text-[#515151] mt-5">
        <NavLink
          to="/dashboard/doc"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.home_icon} alt="" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>

        <NavLink
          to="/dashboard/docAppointment"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.appointment_icon} alt="" />
          <p className="hidden md:block">Appointment</p>
        </NavLink>

        <NavLink
          to="/dashboard/docProfile"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? "bg-[#F2F3FF] border-r-4 border-[#5f5fff]" : ""
            }`
          }
        >
          <img src={adminAssets.people_icon} alt="" />
          <p className="hidden md:block">Profile</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
