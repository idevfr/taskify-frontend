import axios from "axios";

export const userInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/users`,
  withCredentials: true,
});
