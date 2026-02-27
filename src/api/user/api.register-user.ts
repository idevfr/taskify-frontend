import axios from "axios";
import { userInstance } from "../instances/userInstance.ts";
import type { ApiResponse, RegisterUser } from "../../helpers/types.ts";
type registerDataType = {
  _id: string;
  fullName: string;
  username: string;
  avatar: string;
  email: string;
};
export const registerFn = async function (
  value: RegisterUser<File>,
): Promise<ApiResponse<registerDataType>> {
  try {
    const formData = new FormData();

    formData.append("fullName", value.fullName);
    formData.append("username", value.username);
    formData.append("email", value.email);
    formData.append("password", value.password);

    if (value.avatar) {
      formData.append("avatar", value.avatar);
    }
    const response = await userInstance.post<ApiResponse<registerDataType>>(
      `/register`,
      formData,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
    throw error;
  }
};
