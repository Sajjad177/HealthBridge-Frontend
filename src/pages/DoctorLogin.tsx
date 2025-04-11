import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      className="flex items-center justify-center min-h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 bg-white p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">Doctor Login</p>

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border border-zinc-300 rounded p-2 w-full mt-1 focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div className="w-full">
          <p className="font-medium">Password</p>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="border border-zinc-300 rounded p-2 w-full mt-1 focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-base cursor-pointer hover:bg-blue-700 transition-all"
        >
          Login
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-blue-600 underline cursor-pointer"
        >
          For user
        </p>
      </div>
    </form>
  );
};

export default DoctorLogin;
