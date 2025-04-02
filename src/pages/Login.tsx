import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  // React Hook Form
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
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign Up" : "Log In"} to book an
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="font-medium">Full Name</p>
            <input
              type="text"
              {...register("name", { required: "Full Name is required" })}
              className="border border-zinc-300 rounded p-2 w-full mt-1 focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>
            )}
          </div>
        )}

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border border-zinc-300 rounded p-2 w-full mt-1 focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>
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
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Log In")}
              className="text-blue-600 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
