import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const getCourses = async () => {
  const url = URL.COURSE;
  const response = await httpRequest.get(url);
  return response.data;
};
