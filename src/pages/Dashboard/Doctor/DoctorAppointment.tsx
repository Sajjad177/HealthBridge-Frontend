import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import { assets } from "../../../assets/assets_frontend/assets";

const DoctorAppointment = () => {
  return (
    <div className="w-full max-w-6xl">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded border-gray-100 text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_2fr_2fr_1fr_1fr] gap-1 py-3 px-5 border-b border-gray-100 font-medium text-gray-700">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fee</p>
          <p>Action</p>
        </div>

        {/* Single Appointment Row (Map this part later) */}
        <div className="flex flex-col sm:grid grid-cols-[0.5fr_3fr_1fr_2fr_2fr_1fr_1fr] items-center text-gray-600 py-3 px-5 border-b border-gray-100 gap-3 sm:gap-1">
          {/* Index */}
          <p className="max-sm:hidden">1</p>
          {/* <p>{index+1}</p> */}

          <div className="flex items-center gap-2">
            <img
              src={assets.about_image}
              alt="patient"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p>John Doe</p>
          </div>

          {/* {item.payment ? "ONLINE" : "ON CASH"} */}
          <p className="text-green-600 font-semibold">ONLINE</p>
          <p>23</p>
          <p>01/01/2023, 10:00 AM</p>
          <p>$50</p>

          {/* Action Buttons */}

          {/* when add function then uncomment it */}

          {/* {item.cancelled ? (
            <p className="text-red-400 text-xs font-medium">Cancelled</p>
          ) : item.isCompleted ? (
            <p className="text-green-400 text-xs font-medium">Completed</p>
          ) : (
            <div className="flex gap-2">
              <img
                src={adminAssets.cancel_icon}
                alt="Cancel"
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              />
              <img
                src={adminAssets.tick_icon}
                alt="Approve"
                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              />
            </div>
          )} */}

          <div className="flex gap-2">
            <img
              src={adminAssets.cancel_icon}
              alt="Cancel"
              className="w-10 sm:w-8 sm:h-8 cursor-pointer"
            />
            <img
              src={adminAssets.tick_icon}
              alt="Approve"
              className="w-10 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
