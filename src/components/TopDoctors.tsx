import { useNavigate } from "react-router-dom";
import { useGetAllDoctorsQuery } from "../redux/features/doctor/doctorManagement";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { data } = useGetAllDoctorsQuery("");
  const doctors = data?.data;


  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 w-full px-4">
      <h1 className="text-3xl font-medium text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-auto gap-6 pt-5 w-full ">
        {doctors?.slice(0, 10)?.map((item: any, index: number) => (
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
              {/* add there some logic turnary operator to check whether the doctor is available or not */}

              <div
                className={`flex items-center gap-2 text-sm ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                {/* after logic uncomment this or copy from Doctor page also both are same  */}

                <span
                  className={`w-2 h-2 ${
                    item.available ? "bg-green-500" : "bg-gray-700"
                  } rounded-full inline-block`}
                ></span>
                <p>Available</p>
              </div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => navigate("/doctors")}
        className="mt-10 px-12 py-3 bg-blue-50 font-semibold text-gray-600 rounded-full cursor-pointer hover:bg-blue-100 transition duration-300"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
