import axios from "axios";
export const todoInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/todo`,
  withCredentials: true,
});
