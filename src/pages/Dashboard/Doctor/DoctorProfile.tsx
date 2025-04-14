import { useEffect, useState } from "react";
import { assets } from "../../../assets/assets_frontend/assets";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hook";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorProfileMutation,
} from "../../../redux/features/doctor/doctorManagement";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const DoctorProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const user = useAppSelector(selectCurrentUser);

  const { data } = useGetSingleDoctorQuery(user?.userId);
  const profileData = data?.data;

  const [updateDoctorProfile] = useUpdateDoctorProfileMutation();

  const { register, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      name: "",
      degree: "",
      experience: "",
      about: "",
      fees: "",
      address: "",
      image: "",
      available: false,
    },
  });

  useEffect(() => {
    if (profileData) {
      reset({
        name: profileData.name || "",
        degree: profileData.degree || "",
        experience: profileData.experience || "",
        about: profileData.about || "",
        fees: profileData.fees || "",
        address: profileData.address || "",
        image: profileData.image || "",
        available: profileData.available || false,
      });
    }
  }, [profileData, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("file", imageFile!);

      const res = await updateDoctorProfile({
        id: user?.userId,
        data: formData,
      }).unwrap();

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        setIsEdit(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-[550px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 m-5"
      >
        <label htmlFor="image">
          <div className="inline-block relative cursor-pointer">
            <img
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : watch("image") || assets.profile_pic
              }
              alt="Doctor"
              className="w-36 h-36 rounded-full object-cover border"
            />
            {isEdit && (
              <img
                src={assets.upload_icon}
                alt="Upload Icon"
                className="absolute w-10 bottom-2 right-2 cursor-pointer"
              />
            )}
          </div>
          {isEdit && (
            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImageFile(e.target.files[0]);
                }
              }}
            />
          )}
        </label>

        <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
          <p className="text-3xl font-medium text-gray-700">{watch("name")}</p>

          <div className="flex items-center gap-2 mt-1 text-gray-600">
            {isEdit ? (
              <input {...register("degree")} type="text" />
            ) : (
              <p>{watch("degree")}</p>
            )}
            <div className="py-0.5 px-3 border border-gray-200 rounded-full">
              {isEdit ? (
                <input {...register("experience")} type="number" />
              ) : (
                <p>{watch("experience")}</p>
              )}
            </div>
          </div>

          <div>
            <p className="flex text-center gap-1 text-lg font-medium text-neutral-800 mt-3">
              About:
            </p>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">
              {watch("about")}
            </p>
          </div>

          <p className="text-gray-600 mt-4 font-medium">
            Appointment fee:{" "}
            <span className="text-gray-800">
              {isEdit ? (
                <input {...register("fees")} type="number" />
              ) : (
                <>৳ {watch("fees")}</>
              )}
            </span>
          </p>

          <div className="mt-4 flex gap-2 items-center">
            <p>Address:</p>
            {isEdit ? (
              <input
                {...register("address")}
                type="text"
                className="text-sm border p-1"
              />
            ) : (
              <p className="text-gray-600 text-sm">{watch("address")}</p>
            )}
          </div>

          <div className="flex gap-2 items-center pt-2">
            {isEdit ? (
              <>
                <input
                  type="checkbox"
                  {...register("available")}
                  checked={watch("available")}
                  onChange={(e) => setValue("available", e.target.checked)}
                />
                <label>Available</label>
              </>
            ) : (
              <>
                <input
                  className="accent-green-500"
                  type="checkbox"
                  checked={watch("available")}
                  disabled
                />
                <label className="text-sm text-green-500">Available</label>
              </>
            )}
          </div>

          {isEdit && (
            <button
              type="submit"
              className="px-4 py-1 border border-[#5f5fff] text-sm rounded-full mt-5 cursor-pointer hover:bg-[#5f5fff] hover:text-white transition-all"
            >
              Save
            </button>
          )}
        </div>
      </form>

      {!isEdit && (
        <div className="m-5">
          <button
            onClick={() => setIsEdit(true)}
            type="button"
            className="px-4 py-1 border border-[#5f5fff] text-sm text-[#5f5fff] rounded-full hover:bg-[#5f5fff] hover:text-white transition-all duration-300 ease-in-out"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
