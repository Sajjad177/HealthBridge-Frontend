import { useState } from "react";
import { assets } from "../../../assets/assets_frontend/assets";

const DoctorProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-4 m-5">
        <div>
          <img
            src={assets.header_img}
            alt=""
            className="bg-[#5f5fff]/80 w-full sm:max-w-64 rounded-lg "
          />
        </div>

        <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
          {/* ---------------show doctor info---------------- */}
          <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
            Sadiya Tasnim
          </p>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>MBBS - Pediatricians</p>
            <button className="py-0.5 px-3 border border-gray-200 rounded-full">
              2 years
            </button>
          </div>
          {/* ---------doc about section--------- */}
          <div>
            <p className="flex text-center gap-1 text-lg font-medium text-neutral-800 mt-3">
              About:
            </p>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              libero et veniam, nostrum eligendi quis non, nobis consequuntur
              perferendis quod ex, odio dicta nemo minus.
            </p>
          </div>

          <p className="text-gray-600 mt-4 font-medium">
            Appointment fee:{" "}
            <span className="text-gray-800">
              {isEdit ? <input type="number" defaultValue={500} /> : "৳ 500"}
            </span>
          </p>

          <div className="mt-4 flex gap-2 items-center">
            <p>Address:</p>
            <p className="text-gray-600 text-sm">
              {isEdit ? (
                <input
                  type="text"
                  defaultValue={"House-1, Road-1, Block-A, Dhaka"}
                />
              ) : (
                "House-1, Road-1, Block-A, Dhaka"
              )}
            </p>
          </div>

          {/* this check box doctor can update his availability */}
          <div className="flex gap-2 items-center pt-2">
            {/* after function uncomment this */}
            {/* <input
              onChange={() => isEdit}
              checked={profileData.available}
              type="checkbox"
              name=""
              id=""
            /> */}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Available</label>
          </div>

          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="px-4 py-1 border border-[#5f5fff] text-sm rounded-full mt-5 cursor-pointer hover:bg-[#5f5fff] hover:text-white transition-all duration-300 ease-in-out"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-4 py-1 border border-[#5f5fff] text-sm rounded-full mt-5 cursor-pointer hover:bg-[#5f5fff] hover:text-white transition-all duration-300 ease-in-out"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
