import { useForm } from "react-hook-form";
import { adminAssets } from "../../../assets/assets_admin/adminAssets";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  //* show error for image not selected

  const onSubmit = (data) => {
    console.log("Doctor Form Data:", data);
  };

  return (
    <form className="m-5 w-full" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-5 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border border-gray-200 rounded w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              src={adminAssets.upload_area}
              alt=""
              className="cursor-pointer w-16 bg-gray-100 rounded-full"
            />
          </label>
          <input type="file" id="doc-img" {...register("doctorImage")} hidden />
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
                {...register("name")}
              />
            </div>
            <div className="add-doctor-div">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                className="add-doctor-input"
                {...register("email")}
              />
            </div>
            <div className="add-doctor-div">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                className="add-doctor-input"
                {...register("password")}
              />
            </div>

            <div className="add-doctor-div">
              <p>Experience</p>
              <select className="add-doctor-input" {...register("experience")}>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={`${i + 1} year`}>
                    {i + 1} year
                  </option>
                ))}
              </select>
            </div>

            <div className="add-doctor-div">
              <p>Fee</p>
              <input
                type="number"
                placeholder="Fee"
                className="add-doctor-input"
                {...register("fee")}
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="add-doctor-div">
              <p>Speciality</p>
              <select className="add-doctor-input" {...register("speciality")}>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="add-doctor-div">
              <p>Education</p>
              <input
                type="text"
                placeholder="Education"
                className="add-doctor-input"
                {...register("education")}
              />
            </div>
            <div className="add-doctor-div">
              <p>Address</p>
              <input
                type="text"
                placeholder="Address"
                className="add-doctor-input"
                {...register("address")}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-5 mb-2">About Doctor</p>
          <textarea
            rows={5}
            placeholder="Write about doctor"
            className="w-full border border-gray-200 rounded p-2"
            {...register("about")}
          />
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
