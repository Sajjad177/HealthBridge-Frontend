import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="w-44 cursor-pointer"
      />
      <ul className="hidden md:flex items-center gap-6 font-medium text-gray-800">
        <NavLink to={"/"}>
          <li className="cursor-pointer py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="cursor-pointer py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="cursor-pointer py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="cursor-pointer py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      {/* create account and drop down */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            {/* add function there and turnary operator there */}
            <img
              src={assets.profile_pic}
              alt=""
              className="w-9 h-9 rounded-full border-2 border-gray-300"
            />
            <img src={assets.dropdown_icon} alt="" className="w-2.5 " />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-2 p-2">
                {/* show there turnary operator if role is admin onClick=
                {() => navigate("/dashboard")} or role is doctor then onClick=
                {() => navigate("/dashboard/doc")} */}

                {/* role is doctor and admin then show this only */}
                <p
                  onClick={() => navigate("/dashboard")}
                  className="hover:text-black cursor-pointer"
                >
                  Dashboard
                </p>
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  // onClick={() => setToken(false)}
                  onClick={handleLogout}
                  className=" text-red-500 hover:text-red-600 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white py-3 px-5 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )}
        <img
          src={assets.menu_icon}
          alt=""
          className="w-6 md:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
        {/* ------show mobile menu----- */}
        <div
          className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
              className="w-7 cursor-pointer"
            />
          </div>
          <ul className="flex flex-col gap-4 text-lg font-medium items-start mt-5 px-5">
            <NavLink onClick={() => setShowMenu(false)} to={"/"}>
              <p className="px-4 py-2 rounbded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
              <p className="px-4 py-2 rounbded inline-block">All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounbded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounbded inline-block">Contract</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
