import { URL } from "../constants";
import httpRequest from "../services/http-request";
export const deleteCourse = async (id) => {
  const url = `${URL.COURSE}/${id}/`;
  const response = await httpRequest.delete(url);
  return response.data;
};
