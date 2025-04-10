import { adminAssets } from "../../../assets/assets_admin/adminAssets";

const DoctorDashboard = () => {
  return (
    <div className="m-5">
      <div className="flex flex-wrap gap-5">
        <div className="admnin-dashboard-card">
          <img className="w-14" src={adminAssets.earning_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">$200</p>
            <p className="text-gray-400">Earnings</p>
          </div>
        </div>

        <div className="admnin-dashboard-card">
          <img src={adminAssets.appointments_icon} alt="" className="w-14" />
          <div>
            <p className="text-xl font-semibold text-gray-600">2</p>
            <p className="text-gray-400">Appointments</p>
          </div>
        </div>

        <div className="admnin-dashboard-card">
          <img src={adminAssets.patients_icon} alt="" className="w-14" />
          <div>
            {/* only show which are not cancelled and completed */}
            <p className="text-xl font-semibold text-gray-600">2</p>
            <p className="text-gray-400">Patients</p>
          </div>
        </div>
      </div>

      {/* ------- show latest booking table ---------- */}
      <div className="mt-15 bg-white max-w-2xl">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
          <img src={adminAssets.list_icon} alt="" />
          <p className="text-gray-600 font-semibold">Latest Booking </p>
        </div>

        <div className="pt-5 border border-t-0 border-gray-100">
          {/* enter this in map function */}
          {/* show there patient data */}
          <div className="flex items-center gap-5 px-5 py-3 hover:bg-gray-100">
            <img
              src={adminAssets.doctor_icon}
              alt=""
              className="w-14 rounded-full"
            />
            <div className="flex-1 text-sm">
              <p className="text-gray-800 font-medium">Dr. John Doe</p>
              <p className="text-gray-600">1/1/2023, 10:00 AM</p>
            </div>
            {/* after function add uncomment this if cancelled then show a delete icon for permanent delete */}

            {/* {item.isCancelled ? (
                    <p className="text-red-500 text-xs font-medium">cancelled</p>
                  ) : (
                    <img
                      src={adminAssets.cancel_icon}
                      alt=""
                      className="w-10 cursor-pointer"
                    />
                  )} */}
            <img
              src={adminAssets.cancel_icon}
              alt=""
              className="w-10 cursor-pointer"
            />
            {/* when click the cancle button appointment will canceled. [cancelled == true] */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
