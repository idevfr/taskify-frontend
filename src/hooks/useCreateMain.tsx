import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createMainFn,
  type resDataType,
} from "../api/todo/main/api.create-main-todo";

export const useCreateMain = function () {
  const queryClient = useQueryClient();
  const {
    isPending: isCreatingMain,
    mutateAsync: createMain,
    error: mainError,
    data: creadtedTodoData,
  } = useMutation({
    mutationFn: (data: Pick<resDataType, "title" | "date">) =>
      createMainFn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
        exact: true,
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { isCreatingMain, createMain, mainError, creadtedTodoData };
};
