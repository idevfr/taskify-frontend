import { Navigate, Outlet } from "react-router-dom";
import { useLoggedInUser } from "../hooks/useloggedInUser";
import { useTokens } from "../hooks/useTokens";
import axios from "axios";
import { useEffect } from "react";
import LoaderFullscreen from "../ui/LoaderFullscreen";

function AuthRoute() {
  const {
    isLoadingLoggedinUser,
    loggedInUser,
    loggedInUserError,
    refetchLoggedInUser,
  } = useLoggedInUser();
  const { isGnerating, generateTokens, tokenError } = useTokens();
  useEffect(() => {
    if (loggedInUserError && axios.isAxiosError(loggedInUserError)) {
      generateTokens().then(() => {
        refetchLoggedInUser();
      });
    }
  }, [generateTokens, loggedInUserError, refetchLoggedInUser]);
  if (isLoadingLoggedinUser || isGnerating) {
    return <LoaderFullscreen size={120} />;
  }
  if (!loggedInUser || tokenError || axios.isAxiosError(tokenError)) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}

export default AuthRoute;
