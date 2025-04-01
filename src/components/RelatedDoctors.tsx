import { useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const [relatedDoc, setRelatedDoc] = useState();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 w-full px-4">
      <h1 className="text-3xl font-medium text-center">Related Doctors</h1>
      <p className="sm:w-1/2 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-auto gap-6 pt-5 w-full ">
        {doctors.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <img src={item.image} alt={item.name} className=" bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                <p>Available</p>
              </div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctors;
