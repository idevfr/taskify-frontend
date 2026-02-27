import axios from "axios";
import { todoInstance } from "../../instances/todoInstance";
import { type ApiResponse } from "../../../helpers/types";

type ReponseDataType = [
  {
    _id: string;
    title: string;
    owner: string;
    createdAt: string;
    updatedAt: string;
    taskSize: number;
    completedTask: number;
  },
];
export const getALlMainFn = async function () {
  try {
    const response =
      await todoInstance.get<ApiResponse<ReponseDataType>>("/get-all");
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
