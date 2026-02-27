import { useQuery } from "@tanstack/react-query";
import { getUserFn } from "../api/user/api.get-user";

export const useLoggedInUser = function () {
  const {
    data: loggedInUser,
    isPending: isLoadingLoggedinUser,
    error: loggedInUserError,
    refetch: refetchLoggedInUser,
  } = useQuery({
    queryKey: ["user", "logged-in"],
    queryFn: getUserFn,
  });

  return {
    loggedInUser,
    isLoadingLoggedinUser,
    loggedInUserError,
    refetchLoggedInUser,
  };
};
