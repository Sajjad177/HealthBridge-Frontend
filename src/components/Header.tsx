import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* ------left side------ */}
      <div className="md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img src={assets.group_profiles} alt="" className="w-28" />
          <p className="">
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#spaciality"  // start there header
          className="flex items-center gap-2 bg-white font-semibold px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ease-in-out w-fit"
        >
          Book Appointment{" "}
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </a>
      </div>

      {/* ---------right side------ */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
