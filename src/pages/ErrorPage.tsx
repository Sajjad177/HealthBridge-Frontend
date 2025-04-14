import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl">
        <Lottie
          animationData={assets.error}
          className="w-full mb-6 shadow-md rounded-lg"
        />
      </div>

      <Link to="/">
        <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="cursor-pointer relative">Back to Home</span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
