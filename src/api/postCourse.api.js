import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const postCourse = async (data) => {
  const url = URL.COURSE;
  const response = await httpRequest.post(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
