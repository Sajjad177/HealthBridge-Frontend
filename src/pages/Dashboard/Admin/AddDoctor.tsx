import { SubmitHandler, useForm } from "react-hook-form";
import { adminAssets } from "../../../assets/assets_admin/adminAssets";
import { useAddDoctorMutation } from "../../../redux/features/doctor/doctorManagement";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type addDoctorForm = {
  name: string;
  email: string;
  password: string;
  image: File | null;
  speciality: string;
  experience: string;
  about: string;
  fees: number;
  address: string;
  education: string;
  degree: string;
};

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<addDoctorForm>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const [addDoctor] = useAddDoctorMutation();

  const onSubmit: SubmitHandler<addDoctorForm> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("data", JSON.stringify(data));
      formData.append("file", data.image!);

      const res = await addDoctor(formData).unwrap();
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        reset();
        setImagePreview(null);
        navigate("/dashboard/doctor-list");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file); // Set to react-hook-form
      setImagePreview(URL.createObjectURL(file)); // Set preview
    }
  };

  return (
    <form className="m-5 w-full" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-5 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border border-gray-200 rounded w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              src={imagePreview || adminAssets.upload_area}
              alt="Doctor Preview"
              className="cursor-pointer w-16 h-16 object-cover bg-gray-100 rounded-full"
            />
          </label>
          <input type="file" id="doc-img" onChange={handleImageChange} hidden />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="add-doctor-div">
              <p>Doctor Name</p>
              <input
                type="text"
                placeholder="Name"
                className="add-doctor-input"
                {...register("name", { required: "Doctor name is required" })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="add-doctor-div">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                className="add-doctor-input"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="add-doctor-div">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                className="add-doctor-input"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="add-doctor-div">
              <p>Experience</p>
              <select
                className="add-doctor-input"
                {...register("experience", {
                  required: "Experience is required",
                })}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={`${i + 1} year`}>
                    {i + 1} year
                  </option>
                ))}
              </select>
              {errors.experience && (
                <span className="text-red-500">
                  {errors.experience.message}
                </span>
              )}
            </div>

            <div className="add-doctor-div">
              <p>Fee</p>
              <input
                type="number"
                placeholder="Fee"
                className="add-doctor-input"
                {...register("fees", { required: "Fee is required" })}
              />
              {errors.fees && (
                <span className="text-red-500">{errors.fees.message}</span>
              )}
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="add-doctor-div">
              <p>Speciality</p>
              <select
                className="add-doctor-input"
                {...register("speciality", {
                  required: "Speciality is required",
                })}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
              {errors.speciality && (
                <span className="text-red-500">
                  {errors.speciality.message}
                </span>
              )}
            </div>
            <div className="add-doctor-div">
              <p>Education</p>
              <input
                type="text"
                placeholder="Education"
                className="add-doctor-input"
                {...register("education", {
                  required: "Education is required",
                })}
              />
              {errors.education && (
                <span className="text-red-500">{errors.education.message}</span>
              )}
            </div>
            <div className="add-doctor-div">
              <p>Degree</p>
              <input
                type="text"
                placeholder="degree"
                className="add-doctor-input"
                {...register("degree", { required: "Degree is required" })}
              />
              {errors.degree && (
                <span className="text-red-500">{errors.degree.message}</span>
              )}
            </div>
            <div className="add-doctor-div">
              <p>Address</p>
              <input
                type="text"
                placeholder="Address"
                className="add-doctor-input"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="mt-5 mb-2">About Doctor</p>
          <textarea
            rows={5}
            placeholder="Write about doctor"
            className="w-full border border-gray-200 rounded p-2"
            {...register("about", { required: "About is required" })}
          />
          {errors.about && (
            <span className="text-red-500">{errors.about.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary text-white text-sm mt-4 px-10 py-2 rounded-full cursor-pointer"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
