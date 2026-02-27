import axios from "axios";
import { userInstance } from "../instances/userInstance";
import type { ApiResponse } from "../../helpers/types";
type ResponseDataType = object;
export const getTokenFn = async function (): Promise<
  ApiResponse<ResponseDataType>
> {
  try {
    const { data } = await userInstance.post("/refresh-tokens", {});
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
