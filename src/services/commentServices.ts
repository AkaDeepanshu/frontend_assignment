import axiosInstance from "./api";

export const fetchComments = async () => {
  try {
    const response = await axiosInstance.get("/comments");
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
