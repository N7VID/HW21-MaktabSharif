import { URL } from "../constants";
import httpRequest from "../services/http-request";
export const putCourse = async (id, data) => {
  const url = `${URL.COURSE}/${id}/`;
  const response = await httpRequest.put(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
