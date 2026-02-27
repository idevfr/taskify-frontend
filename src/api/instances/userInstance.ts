import axios from "axios";

export const userInstance = axios.create({
  baseURL: "/api/v1/users",
  withCredentials: true,
});
// let isRefreshing = false;
// userInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Only handle 401 once
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       if (!isRefreshing) {
//         isRefreshing = true;
//         try {
//           await userInstance.post("/refresh-tokens");
//           isRefreshing = false;
//           return userInstance(originalRequest);
//         } catch (err) {
//           isRefreshing = false;
//           return Promise.reject(err);
//         }
//       }
//     }

//     return Promise.reject(error);
//   },
// );
