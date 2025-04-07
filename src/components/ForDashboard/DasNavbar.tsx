import { adminAssets } from "../../assets/assets_admin/adminAssets";

const DasNavbar = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          src={adminAssets.admin_logo}
          alt=""
          className="w-36 sm:w-40 cursor-pointer"
        />
        {/* add there turnary operator in role admin or doctor */}
        <p className="border px-2.5 rounded-full border-gray-500 text-gray-700">
          Admin
        </p>
      </div>
      <button className="bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default DasNavbar;
