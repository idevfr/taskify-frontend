import axios from "axios";
import type { ApiResponse } from "../../helpers/types.ts";
import { userInstance } from "../instances/userInstance.ts";
type ResponseDataType = {
  fullName: string;
  email: string;
  username: string;
  avatar: string;
};

export const getUserFn = async function () {
  try {
    const response =
      await userInstance.get<ApiResponse<ResponseDataType>>(`/loggedin-user`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.status, error.message, error.stack);
      throw error;
    }
    throw error;
  }
};
