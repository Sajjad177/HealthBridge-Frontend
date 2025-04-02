import { useState } from "react";
import { useForm } from "react-hook-form";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "Edward Vincent",
      email: "demo@example.com",
      phone: "123-456-7890",
      address: "123 Main Street, Anytown, USA",
      image: assets.profile_pic,
      gender: "Male",
      dob: "1990-01-01",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated Profile Data:", data);
    // setIsEdit(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-6 bg-white rounded-lg max-w-lg "
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={watch("image")}
          alt="Profile"
          className="w-36 h-36 rounded-full border-2 border-gray-300 object-cover"
        />
      </div>

      {/* Name Field */}
      <div className="text-center">
        {isEdit ? (
          <input
            {...register("name")}
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full text-center text-xl font-medium"
          />
        ) : (
          <p className="text-2xl font-semibold">{watch("name")}</p>
        )}
      </div>

      <hr className="border-gray-300" />

      {/* Contact Information */}
      <div>
        <p className="text-gray-500 uppercase font-medium mb-2">
          Contact Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-3 text-gray-700">
          <p className="font-semibold">Email:</p>
          <p className="text-blue-500">{watch("email")}</p>

          <p className="font-semibold">Phone:</p>
          {isEdit ? (
            <input
              {...register("phone")}
              type="text"
              className="border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="text-blue-500">{watch("phone")}</p>
          )}

          <p className="font-semibold">Address:</p>
          {isEdit ? (
            <input
              {...register("address")}
              type="text"
              className="border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="text-gray-500">{watch("address")}</p>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="text-gray-500 uppercase font-medium mb-2">
          Basic Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-3 text-gray-700">
          <p className="font-semibold">Gender:</p>
          {isEdit ? (
            <select
              {...register("gender")}
              className="border border-gray-300 rounded-md p-2"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{watch("gender")}</p>
          )}

          <p className="font-semibold">Date of Birth:</p>
          {isEdit ? (
            <input
              {...register("dob")}
              type="date"
              className="border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="text-gray-500">{watch("dob")}</p>
          )}
        </div>
      </div>

      {/* Edit / Save Button */}
      <div className="text-center mt-4">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            type="submit"
            className="border border-blue-600 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Save Information
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEdit(true)}
            className="border border-blue-600 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default MyProfile;
