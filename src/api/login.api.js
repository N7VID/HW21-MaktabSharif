import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const login = async (data) => {
  const url = URL.LOGIN;
  const response = await httpRequest.post(url, data);
  return response.data;
};
