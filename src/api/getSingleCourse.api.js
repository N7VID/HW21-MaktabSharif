import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const getSingleCourse = async (id) => {
  const url = `${URL.COURSE}/${id}/`;
  const response = await httpRequest.get(url);
  return response.data;
};
