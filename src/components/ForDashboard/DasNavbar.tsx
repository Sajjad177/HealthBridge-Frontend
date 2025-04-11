import { useNavigate } from "react-router-dom";
import { adminAssets } from "../../assets/assets_admin/adminAssets";
import { useAppSelector } from "../../redux/hook";
import { logOut, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const DasNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          src={adminAssets.admin_logo}
          alt=""
          className="w-36 sm:w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />
        {/* add there turnary operator in role admin or doctor */}
        {user && user.role === "admin" ? (
          <p className="border px-2.5 rounded-full border-gray-500 text-gray-700">
            Admin
          </p>
        ) : (
          <p className="border px-2.5 rounded-full border-gray-500 text-gray-700">
            Doctor
          </p>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default DasNavbar;
