import axios from "axios";
import { refreshToken } from "../api/refreshToken.api";
import { URL } from "../constants";

const httpRequest = axios.create({
  baseURL: URL.BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

httpRequest.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

httpRequest.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const status = error.response.status;
    const originRequest = error.config;
    const refresh = localStorage.getItem("refreshToken");

    if (status === 401 && refresh) {
      return refreshToken(refresh)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.access);
          return httpRequest.request(originRequest);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } else {
      return Promise.reject(error);
    }
  }
);

export default httpRequest;
