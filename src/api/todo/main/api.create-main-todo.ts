import axios from "axios";
import type { ApiResponse } from "../../../helpers/types";
import { todoInstance } from "../../instances/todoInstance";

export type resDataType = {
  _id: string;
  title: string;
  date: Date;
};
export const createMainFn = async function (
  value: Pick<resDataType, "date" | "title">,
): Promise<ApiResponse<resDataType>> {
  try {
    const response = await todoInstance.post<ApiResponse<resDataType>>(
      "/create",
      value,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
