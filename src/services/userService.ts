import axiosInstance from "./api";
import type { User } from "../types/user";

export const fetchUser = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get<User>("/users/1");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
