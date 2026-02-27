import axios from "axios";
export const todoInstance = axios.create({
  baseURL: "/api/v1/todo",
  withCredentials: true,
});
