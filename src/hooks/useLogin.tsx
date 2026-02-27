import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { credentials } from "../helpers/types";
import { loginfn } from "../api/user/api.login-user";

export const useLogin = function () {
  const queryClient = useQueryClient();
  const {
    isPending: isLoggingIn,
    data: loggedInUserData,
    mutate: loginUser,
    error: logInError,
  } = useMutation({
    mutationFn: (credentials: credentials) => loginfn(credentials),
    onSuccess: (res) => {
      queryClient.setQueryData(["user"], res.data.user);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { isLoggingIn, loggedInUserData, loginUser, logInError };
};
