import { doctors } from "../assets/assets_frontend/assets";

const MyAppointments = () => {
  return (
    <div>
      <p className="text-xl pb-3 mt-12 font-medium text-zinc-700 border-b border-zinc-200">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-zinc-200"
          >
            <div>
              <img src={item.image} alt="" className="w-32 bg-indigo-50" />
            </div>
            {/* Appointment Info */}
            <div className="flex-1 text-sm text-gray-700 space-y-1">
              <p className="text-lg font-semibold text-gray-900">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
              <p className="text-gray-500">{item.address.line1}</p>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Date & Time:</span>{" "}
                <span className="text-gray-800">25, July, 2024 | 8:30 PM</span>
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-stone-500 rounded cursor-pointer hover:bg-[#5f5fff] hover:text-white transition-all duration-300 ease-in-out">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-stone-500 rounded cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
