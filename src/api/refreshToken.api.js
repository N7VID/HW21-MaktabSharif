import { URL } from "../constants";
import httpRequest from "../services/http-request";

export const refreshToken = async (refresh) => {
  const url = URL.REFRESH;
  return await httpRequest.post(url, { refresh });
};
