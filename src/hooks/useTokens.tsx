import { useMutation } from "@tanstack/react-query";
import { getTokenFn } from "../api/user/api.tokens";
import { useNavigate } from "react-router-dom";

export const useTokens = function () {
  const navigate = useNavigate();
  const {
    isPending: isGnerating,
    mutateAsync: generateTokens,
    error: tokenError,
    data: tokenData,
  } = useMutation({
    mutationFn: getTokenFn,
    onSuccess: (val) => {
      navigate("/home");
      console.log(val);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { isGnerating, generateTokens, tokenError, tokenData };
};
