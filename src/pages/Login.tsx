import { useForm, type SubmitHandler } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin.tsx";
import type { credentials } from "../helpers/types.ts";
import { useLoggedInUser } from "../hooks/useloggedInUser.tsx";
import { useEffect } from "react";
import logo from "../assets/icon.svg";
function Login() {
  const location = useLocation();
  useEffect(() => {
    document.title = `Home | ${location.pathname.split("/").slice(-1)}`;
  }, [location]);
  const { loginUser, isLoggingIn } = useLogin();
  const navigate = useNavigate();
  const { loggedInUser } = useLoggedInUser();
  const { register, handleSubmit } = useForm<credentials>();
  const submitHandler: SubmitHandler<credentials> = function (data) {
    loginUser(data, {
      onSuccess: () => {
        navigate("/home");
      },
    });
  };
  if (loggedInUser) return <Navigate to={"/home"} />;
  return (
    <div className="font-doris flex min-h-screen w-screen flex-col items-center justify-center bg-[url('./nnnoise.svg')] bg-repeat px-1.5 text-gray-950 sm:px-0">
      <div className="animate-form flex h-full w-full flex-col gap-10 border-2 bg-white px-7 py-10 shadow-2xl sm:w-160">
        <div className="flex flex-col items-center gap-3.5">
          <img
            className="inline-block h-10 border-b sm:hidden"
            src={logo}
            alt="taskify logo"
          />
          <h1 className="hidden text-2xl font-extrabold sm:block sm:text-5xl">
            {isLoggingIn ? "Logging In" : "Log in"}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col items-center justify-center gap-6 px-3.5 pb-3.5 text-lg sm:gap-6 sm:pb-0 sm:text-xl"
          action=""
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-3.5">
            <div className="flex w-full items-center justify-start gap-2.5 rounded-lg border-2 border-gray-950 px-1.5 py-1 sm:w-[80%] sm:px-6">
              <label className="hidden font-semibold sm:block" htmlFor="email">
                Email/Username:
              </label>
              <input
                className="w-full flex-1 border-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 sm:w-56"
                type="text"
                id="email"
                placeholder="example@mail.com"
                defaultValue={"imran@gmail.com"}
                disabled={isLoggingIn}
                {...register("identifier", { required: true })}
              />
            </div>
            <div className="py-1border-gray-950 flex w-full items-center justify-start gap-2.5 rounded-lg border-2 px-1.5 py-1 sm:w-[80%] sm:px-6">
              <label
                className="hidden text-center font-semibold sm:block"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="w-full flex-1 border-none sm:w-56"
                type="password"
                id="password"
                defaultValue={"imu1234"}
                placeholder="*******"
                disabled={isLoggingIn}
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <button
            disabled={isLoggingIn}
            className={`flex w-[60%] ${isLoggingIn ? "cursor-not-allowed" : "cursor-pointer"} items-center justify-center rounded-lg border-2 border-gray-950 px-1.5 py-1 font-semibold transition-all duration-100 ease-in-out hover:scale-105 hover:bg-gray-950 hover:text-gray-200 active:scale-90 active:text-sm sm:w-[50%]`}
          >
            Login
          </button>
        </form>
      </div>
      <p className="mt-2.5 text-xl tracking-wider">
        Don't have an account ?{" "}
        <a
          className="cursor-pointer text-xl font-semibold underline"
          onClick={() => navigate("/register")}
        >
          register
        </a>
      </p>
    </div>
  );
}

export default Login;
