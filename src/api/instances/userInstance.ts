import axios from "axios";

export const userInstance = axios.create({
  baseURL: "/api/v1/users",
  withCredentials: true,
});
