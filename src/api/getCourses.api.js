import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const getCourses = async (page, limit, order, sort) => {
  const url = URL.COURSE;
  const response = await httpRequest.get(url, {
    params: { page, limit, order, sort },
  });
  return response.data;
};
