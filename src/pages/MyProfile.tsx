import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { assets } from "../assets/assets_frontend/assets";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import {
  useGetSingleUserQuery,
  useUpdateUserProfileMutation,
} from "../redux/features/user/userManagement";
import { toast } from "sonner";
import PageLoading from "../components/PageLoading";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState("");

  const user = useAppSelector(selectCurrentUser);
  const { data, isLoading } = useGetSingleUserQuery(user?.userId);
  const profileData = data?.data;

  const [updateUserProfile] = useUpdateUserProfileMutation();

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      image: "",
      gender: "",
      dateOfBirth: "",
    },
  });

  useEffect(() => {
    if (profileData) {
      reset({
        name: profileData?.name || "",
        email: profileData?.email || "",
        phone: profileData?.phone || "",
        address: profileData?.address || "",
        image: profileData?.image || "",
        gender: profileData?.gender || "",
        dateOfBirth: profileData?.dateOfBirth?.split("T")[0] || "",
      });
    }
  }, [profileData, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (image) {
        formData.append("file", image as any);
      }

      const res = await updateUserProfile({
        id: user?.userId,
        data: formData,
      }).unwrap();

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        setIsEdit(false); // Only turn off edit mode after update
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <PageLoading />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg max-w-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          {isEdit ? (
            <label htmlFor="image">
              <div className="inline-block relative cursor-pointer">
                <img
                  src={
                    image
                      ? URL.createObjectURL(image as any)
                      : watch("image") || assets.profile_pic
                  }
                  alt=""
                  className="cursor-pointer w-36 rounded opacity-75"
                />
                <img
                  src={image ? "" : assets.upload_icon}
                  alt=""
                  className="absolute w-10 bottom-12 right-12 cursor-pointer"
                />
              </div>

              <input
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImage(e.target.files[0] as any);
                  }
                }}
                type="file"
                id="image"
                hidden
              />
            </label>
          ) : (
            <img
              src={watch("image")}
              alt="Profile"
              className="w-36 h-36 rounded-full border-2 border-gray-300 object-cover"
            />
          )}
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

        {/* Contact Info */}
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

        {/* Basic Info */}
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
                {...register("dateOfBirth")}
                type="date"
                className="border border-gray-300 rounded-md p-2"
              />
            ) : (
              <p className="text-gray-500">{watch("dateOfBirth")}</p>
            )}
          </div>
        </div>

        {/* Save Button */}
        {isEdit && (
          <div className="text-center mt-4">
            <button
              type="submit"
              className="border border-blue-600 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
            >
              Save Information
            </button>
          </div>
        )}
      </form>

      {/* Edit Button (outside the form) */}
      {!isEdit && (
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setIsEdit(true)}
            className="border border-blue-600 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
