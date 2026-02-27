import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubFn, type SubTdo } from "../api/todo/sub/api.create-sub.todo";
type CreateSubParams = {
  _id: string;
  val: SubTdo;
};
export const useCreatesub = function () {
  const queryClient = useQueryClient();
  const {
    mutateAsync: createSub,
    data: createdSubData,
    isPending: isCreatingSub,
    error: createSubError,
  } = useMutation({
    mutationFn: ({ _id, val }: CreateSubParams) => createSubFn(_id, val),
    onSuccess: (_, variables) => {
      const id = String(variables._id);
      queryClient.invalidateQueries({
        queryKey: ["subtodos", id],
        exact: true,
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { createSub, createdSubData, isCreatingSub, createSubError };
};
