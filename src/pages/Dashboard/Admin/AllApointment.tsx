import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import { assets } from "../../../assets/assets_frontend/assets";

const AllApointment = () => {
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="text-lg font-semibold mb-3">All Apointment</p>
      <div className="bg-white border rounder border-gray-100 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-5 border-b border-gray-100">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* show this div in map function */}
        <div className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3 px-5 border-b border-gray-100 hover:bg-gray-50">
          {/* <p>{index+1}</p> */}
          <p className="max-sm:hidden">1</p>
          <div className="flex items-center gap-2">
            <img
              src={assets.about_image}
              alt=""
              className="w-10 rounded-full"
            />{" "}
            <p>John Doe</p>
          </div>
          <p className="max-sm:hidden">25</p>
          <p>1/1/2023, 10:00 AM</p>
          <div className="flex items-center gap-2">
            <img
              src={assets.about_image}
              alt=""
              className="w-10 rounded-full bg-gray-200"
            />{" "}
            <p>Dr. John Doe</p>
          </div>
          <p>$100</p>

          {/* after function add uncomment this if cancelled then show a delete icon for permanent delete */}
          {/* check also same in admin dashboard */}
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
  );
};

export default AllApointment;
