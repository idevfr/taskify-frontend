import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerFn } from "../api/user/api.register-user";
import type { RegisterUser } from "../helpers/types";

export const useRegister = function () {
  const navigate = useNavigate();
  const {
    isPending: isRegistering,
    data: registeredUserData,
    error: registerError,
    mutate: registerUser,
  } = useMutation({
    mutationFn: (data: RegisterUser<File>) => registerFn(data),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (errr) => {
      console.log(errr);
    },
  });
  return { isRegistering, registerUser, registeredUserData, registerError };
};
