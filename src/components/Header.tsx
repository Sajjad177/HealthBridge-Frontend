import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img
            src={assets.group_profiles}
            alt="Profiles"
            className="w-24 md:w-28"
          />
          <p className="max-w-md">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* Book Appointment Button */}
        <a
          href="#spaciality"
          className="flex items-center gap-2 bg-white font-semibold px-6 md:px-8 py-3 rounded-full text-gray-700 text-sm mx-auto md:mx-0 hover:scale-105 transition-transform duration-300 ease-in-out w-fit shadow-md"
        >
          Book Appointment{" "}
          <img src={assets.arrow_icon} alt="Arrow" className="w-4" />
        </a>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.header_img}
          alt="Doctor Illustration"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
