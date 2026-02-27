export type credentials = {
  identifier: string;
  password: string;
};
export type ApiResponse<dataType> = {
  statusCode: number;
  data: dataType;
  message: string;
  success: boolean;
};
export type RegisterUser<T> = {
  email: string;
  username: string;
  password: string;
  fullName: string;
  avatar?: T;
};
