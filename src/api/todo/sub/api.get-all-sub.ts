import axios from "axios";
import { todoInstance } from "../../instances/todoInstance";
import type { ApiResponse } from "../../../helpers/types";
type SubTask = {
  _id: string;
  taskName: string;
  isComplete: boolean;
  completeWithin: Date;
  belongsTo: string;
  createdAt: string;
};
type SubResType = {
  todoTitle: string;
  todoFor: Date;
  tasks: SubTask[];
};
export const getAllSubfn = async function (_id: string) {
  try {
    const response = await todoInstance.get<ApiResponse<SubResType>>(
      `/${_id}/sub/get-all`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
