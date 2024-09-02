import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const register = async (data) => {
  const url = URL.REGISTER;
  const response = await httpRequest.post(url, data);
  return response.data;
};
