import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
    return (
      <div>
        <div className="text-center text-2xl pt-10 text-gray-600">
          <p>
            CONTACT <span className="text-gray-900 font-medium">US</span>
          </p>
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-12 mb-10 text-sm">
          <img
            src={assets.contact_image}
            alt=""
            className="w-full md:max-w-[360px]"
          />
          <div className="flex flex-col justify-center gap-6 items-start">
            <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
            <p className="text-gray-500">Jholasoritola,Bogura</p>
            <p className="text-gray-500">
              Tel: (415) 555‑0132 <br /> Email: healthbridge@gmail.com
            </p>
            <p className="font-semibold text-lg text-gray-600">
              Careers at PRESCRIPTO
            </p>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-gray-700 px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">Explore Jobs</button>
          </div>
        </div>
      </div>
    );
};

export default Contact;