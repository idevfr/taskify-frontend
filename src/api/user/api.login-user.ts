import axios from "axios";
import type { credentials, ApiResponse } from "../../helpers/types.ts";
import { checkIsEmail } from "../../helpers/isEmail.ts";
import { userInstance } from "../instances/userInstance.ts";
export type User = {
  fullName: string;
  email: string;
  username: string;
  avatar: string;
};
type LoginDataType = {
  user: User;
  refreshToken: string;
  accessToken: string;
};
export const loginfn = async function (
  credentials: credentials,
): Promise<ApiResponse<LoginDataType>> {
  const isEmail = checkIsEmail(credentials.identifier);
  let formData;
  if (isEmail) {
    formData = {
      email: credentials.identifier,
      password: credentials.password,
    };
  } else {
    formData = {
      username: credentials.identifier,
      password: credentials.password,
    };
  }
  try {
    const response = await userInstance.post<ApiResponse<LoginDataType>>(
      `/login`,
      formData,
      { withCredentials: true },
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
    console.log(error);
    throw error;
  }
};
