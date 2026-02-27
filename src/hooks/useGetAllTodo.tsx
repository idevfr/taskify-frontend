import { useQuery } from "@tanstack/react-query";
import { getALlMainFn } from "../api/todo/main/api.get-all-main";

export const useTodos = function () {
  const {
    isPending: isGettingMain,
    data: todos,
    error: todosError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getALlMainFn,
  });
  return { isGettingMain, todos, todosError };
};
