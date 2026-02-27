import axios from "axios";
import { userInstance } from "../instances/userInstance";
export const logoutFn = async function () {
  try {
    const response = await userInstance.post(`/logout`, {});
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw error;
    }
    console.log(error);
    throw error;
  }
};
