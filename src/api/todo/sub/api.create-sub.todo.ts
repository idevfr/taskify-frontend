import axios from "axios";
import { todoInstance } from "../../instances/todoInstance";
import type { ApiResponse } from "../../../helpers/types";

export type SubTdo = {
  taskName: string;
  completeWithin?: string;
};
export const createSubFn = async function (
  _id: string,
  val: SubTdo,
): Promise<ApiResponse<SubTdo>> {
  try {
    const response = await todoInstance.post<ApiResponse<SubTdo>>(
      `/${_id}/sub/create`,
      val,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
