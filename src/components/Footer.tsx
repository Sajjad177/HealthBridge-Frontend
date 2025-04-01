import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------- left side ---------- */}
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-1/2 text-gray-600 leading-6">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </p>
        </div>
        {/* ---------- Center side ---------- */}
        <div>
          <p className="text-xl mb-5 font-medium">Company</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---------- right side ---------- */}
        <div>
          <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>+91 0000000000</li>
            <li>healthbridge@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------------ copy right ------------ */}
      <div>
        <hr />
        <p className="text-sm text-gray-600 py-5 text-center">Copyright © 2025 HealthBridge -- All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
