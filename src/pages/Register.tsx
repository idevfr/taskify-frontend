import { useForm, type SubmitHandler } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import type { RegisterUser } from "../helpers/types.ts";
import Loader from "../ui/LoaderFullscreen.tsx";
import { useRegister } from "../hooks/useRegister.tsx";
import { useLoggedInUser } from "../hooks/useloggedInUser.tsx";
import { useEffect } from "react";

function Register() {
  const location = useLocation();
  useEffect(() => {
    document.title = `Home | ${location.pathname.split("/").slice(-1)}`;
  }, [location]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUser<FileList>>();
  const navigate = useNavigate();
  const { isRegistering, registerUser } = useRegister();
  const { loggedInUser } = useLoggedInUser();
  const submitHandler: SubmitHandler<RegisterUser<FileList>> = async function (
    data,
  ) {
    if (
      errors.avatar ||
      errors.email ||
      errors.fullName ||
      errors.fullName ||
      errors.password
    ) {
      return;
    }

    const userObj: RegisterUser<File> = {
      email: data.email,
      avatar: data.avatar?.[0],
      password: data.password,
      fullName: data.fullName,
      username: data.username,
    };
    registerUser(userObj);
  };

  if (loggedInUser) return <Navigate to={"/home"} />;
  return (
    <div className="font-doris flex h-screen w-screen flex-col items-center justify-center bg-[url('./nnnoise.svg')] bg-repeat px-1.5 text-gray-950 sm:px-0">
      <div className="animate-form flex h-fit w-full flex-col gap-1.5 border-2 bg-white shadow-2xl sm:h-112 sm:w-2xl sm:gap-2.5">
        <h1 className="mt-2.5 text-center text-3xl font-bold sm:text-5xl">
          {isRegistering ? "Registering..." : "Register"}
        </h1>
        {isRegistering ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loader size={120} />
          </div>
        ) : (
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col items-center justify-center gap-3.5 px-3.5 pb-3.5 text-lg sm:gap-6 sm:pb-0 sm:text-xl"
          >
            <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:gap-3.5">
              <div className="flex w-[80%] items-center justify-between gap-2.5 rounded-lg border-2 border-gray-950 px-1.5 py-1 sm:w-[60%]">
                <label className="font-semibold" htmlFor="fullName">
                  Full Name:
                </label>
                <input
                  className="w-56 flex-1 border-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                  type="text"
                  id="fullName"
                  placeholder="Your Name"
                  disabled={isRegistering}
                  {...register("fullName", { required: true })}
                />
              </div>
              <div className="flex w-[80%] items-center justify-between gap-2.5 rounded-lg border-2 border-gray-950 px-1.5 py-1 sm:w-[60%]">
                <label className="font-semibold" htmlFor="username">
                  Username:
                </label>
                <input
                  className="w-56 flex-1 border-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                  type="text"
                  id="username"
                  placeholder="username"
                  disabled={isRegistering}
                  {...register("username", { required: true })}
                />
              </div>
              <div className="flex w-[80%] items-center justify-between gap-2.5 rounded-lg border-2 border-gray-950 px-1.5 py-1 sm:w-[60%]">
                <label className="font-semibold" htmlFor="email">
                  Email:
                </label>
                <input
                  className="w-56 flex-1 border-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                  type="email"
                  id="email"
                  placeholder="example@mail.com"
                  disabled={isRegistering}
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex w-[80%] items-center justify-between gap-2.5 rounded-lg border-2 border-gray-950 px-1.5 py-1 sm:w-[60%]">
                <label className="font-semibold" htmlFor="password">
                  Password:
                </label>
                <input
                  className="w-56 flex-1 border-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                  type="password"
                  id="password"
                  placeholder="******"
                  disabled={isRegistering}
                  {...register("password", { required: true })}
                />
              </div>
              <div className="flex w-[80%] items-center justify-between gap-2.5 rounded-lg border-2 border-gray-950 px-1.5 py-1 sm:w-[60%]">
                <label className="font-semibold" htmlFor="avatar">
                  Avatar:{" "}
                </label>
                <input
                  className="flex-1 bg-gray-200 text-sm selection:bg-red-950 file:rounded-sm file:border-2 file:border-gray-950 file:px-0.5 file:py-0.5 file:text-lg file:text-amber-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                  id="avatar"
                  type="file"
                  disabled={isRegistering}
                  {...register("avatar", { required: false })}
                />
              </div>
            </div>
            <button
              disabled={isRegistering}
              className="flex w-[60%] cursor-pointer items-center justify-center rounded-lg border-2 border-gray-950 px-1.5 py-1 font-semibold transition-all duration-100 ease-in-out hover:scale-105 hover:bg-gray-950 hover:text-gray-200 active:scale-90 active:text-sm disabled:cursor-not-allowed sm:w-[50%]"
            >
              Register
            </button>
          </form>
        )}
      </div>
      <p className="mt-2.5 text-xl tracking-wider">
        Already have an account ?{" "}
        <a
          className="cursor-pointer text-xl font-semibold underline"
          onClick={() => navigate("/login")}
        >
          Login
        </a>
      </p>
    </div>
  );
}

export default Register;
