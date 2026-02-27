import { useQuery } from "@tanstack/react-query";
import { getAllSubfn } from "../api/todo/sub/api.get-all-sub";
import { useParams } from "react-router-dom";

// export const useGetAllSub = function (_id: string) {
//   const todoId = useParams();
//   const {
//     isPending: isLoadingSub,
//     data: subTodoData,
//     error: subTodoError,
//   } = useQuery<ApiResponse<SubTask>, Error>({
//     queryKey: ["subtodos", _id],
//     queryFn: ({ queryKey }) => {
//       const [, _id] = queryKey;
//       return getAllSubfn(_id as string);
//     },
//     enabled: !!_id,
//   });
//   return { isLoadingSub, subTodoData, subTodoError };
// };
export const useGetAllSub = function () {
  const { todoId } = useParams();
  const {
    isPending: isLoadingSub,
    data: subTodoData,
    error: subTodoError,
  } = useQuery({
    queryKey: ["subtodos", todoId],
    queryFn: () => getAllSubfn(todoId as string),
    enabled: !!todoId,
  });
  return { isLoadingSub, subTodoData, subTodoError };
};
