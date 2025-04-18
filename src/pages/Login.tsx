import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useRegisterUserMutation } from "../redux/features/user/userManagement";

type LoginFormInputs = {
  name?: string;
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");

  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      //------- 1st for [sign up] 2nd for [login] --------------
      if (state === "Sign Up") {
        const { name, email, password } = data;

        const result = await registerUser({ name, email, password }).unwrap();
        console.log(result);
        const user = verifyToken(result.data.token);

        dispatch(
          setUser({
            user: user,
            token: result.data.token,
          })
        );

        toast.success("Registration successful");
        navigate("/");
        reset();
      } else {
        const { email, password } = data;
        const result = await loginUser({ email, password }).unwrap();
        const user = verifyToken(result.data.token);
        // console.log(result);

        dispatch(
          setUser({
            user: user,
            token: result.data.token,
          })
        );

        toast.success("Login successful");
        if (user.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
              {...register("name", {
                required: state === "Sign Up" ? "Full Name is required" : false,
              })}
              className="border border-zinc-300 rounded p-2 w-full mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>
        )}

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border border-zinc-300 rounded p-2 w-full mt-1"
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
            className="border border-zinc-300 rounded p-2 w-full mt-1"
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
          <div className="flex justify-between">
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-600 underline cursor-pointer"
              >
                Click here
              </span>
            </p>
            <p>
              <span
                onClick={() => navigate("/doctor-login")}
                className="text-blue-600 underline cursor-pointer"
              >
                For Doctors
              </span>
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default Login;
