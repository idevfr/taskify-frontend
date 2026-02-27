import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutFn } from "../api/user/api.logout-user";

export const useLogout = function () {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isPending: isLoggingout,
    data: loggedOutUser,
    mutate: logoutUser,
  } = useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      navigate("/login");
      queryClient.clear();
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { isLoggingout, loggedOutUser, logoutUser };
};
