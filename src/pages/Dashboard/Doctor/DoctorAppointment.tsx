import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import { assets } from "../../../assets/assets_frontend/assets";
import { useGetDoctorOwnAppointmentsQuery } from "../../../redux/features/appointment/appointmentManagement";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hook";
import { calculateAge } from "../../../utils/global";

const DoctorAppointment = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data, isLoading } = useGetDoctorOwnAppointmentsQuery(user?.userId);
  const appointments = data?.data;
  
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

        {/* Appointment Rows */}
        {!isLoading && appointments?.length > 0 ? (
          appointments.map((item: any, index: number) => (
            <div
              key={item._id}
              className="flex flex-col sm:grid grid-cols-[0.5fr_3fr_1fr_2fr_2fr_1fr_1fr] items-center text-gray-600 py-3 px-5 border-b border-gray-100 gap-3 sm:gap-1"
            >
              <p className="max-sm:hidden">{index + 1}</p>

              <div className="flex items-center gap-2">
                <img
                  src={assets.about_image}
                  alt="patient"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p>{item?.userId?.name || "Unknown"}</p>
              </div>

              <p className="text-green-600 font-semibold">
                {item?.payment === "ONLINE" ? "ONLINE" : "CASH"}
              </p>

              <p>{calculateAge(item?.userId?.dateOfBirth)}</p>
              <p>
                {item?.slotDate} - {item?.slotTime}
              </p>
              <p>${item?.docId?.fees || 0}</p>

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
          ))
        ) : isLoading ? (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-gray-600">No Appointments</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointment;
