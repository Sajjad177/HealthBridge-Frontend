import { doctors } from "../../../assets/assets_frontend/assets";

const DoctorList = () => {
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium mb-4">All Doctors</h1>

      <div className="w-full flex flex-wrap gap-4 pt-2 gap-y-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl max-w-56 w-full overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt=""
              className="bg-indigo-50 group-hover:bg-[#5f5fff] transition-all duration-300 ease-in-out"
            />
            <div className="p-4">
              <p className="text-neutral-800 font-semibold text-base">
                {item.name}
              </p>
              <p className="text-zinc-600 text-sm mt-1">{item.speciality}</p>

              <div className="mt-3 flex items-center gap-2">
                {/* when click there check box then chenge available doctor is not available then user can not book. if it is false then make it true and if it is true then make it false */}
                <input
                  type="checkbox"
                  className="accent-green-500 cursor-pointer"
                  // onChange={} // add logic here
                />
                <span className="text-sm text-green-600">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
