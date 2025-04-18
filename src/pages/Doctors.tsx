import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllDoctorsQuery } from "../redux/features/doctor/doctorManagement";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const { data } = useGetAllDoctorsQuery("");
    const doctors = data?.data;

  const filteredDoctors = useMemo(() => {
    return speciality
      ? doctors?.filter((doc: any) => doc.speciality === speciality)
      : doctors;
  }, [speciality]);

  useEffect(() => {
    setFilterDoc(filteredDoctors as any);
  }, [filteredDoctors]);

  return (
    <div className="w-full px-4">
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-2 px-4 border border-gray-300 rounded transition-all cursor-pointer sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filter
        </button>
        {/* -------- Speciality Menu -------- */}
        <div
          className={` flex-col gap-3 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((category) => (
            <p
              key={category}
              onClick={() =>
                speciality === category
                  ? navigate("/doctors")
                  : navigate(`/doctors/${category}`)
              }
              className={`w-[94vw] sm:w-auto px-4 py-2 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === category ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {category}
            </p>
          ))}
        </div>

        {/* -------- Doctors List -------- */}
        <div className="w-full grid grid-cols-auto gap-6">
          {filterDoc?.length > 0 ? (
            filterDoc?.map((item: any) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out "
              >
                <img src={item.image} alt={item.name} className=" bg-blue-50" />
                <div className="p-4">
                  <div
                    className={`flex items-center  gap-2 text-sm ${
                      item.available ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    {/* add there some logic turnary operator to check whether the doctor is available or not */}

                    <span
                      className={`w-2 h-2 ${
                        item.available ? "bg-green-500" : "bg-gray-700"
                      } rounded-full inline-block`}
                    ></span>
                    <p>{item.available ? "Available" : "Unavailable"}</p>
                  </div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No doctors found for this speciality.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
