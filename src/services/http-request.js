import axios from "axios";
import { URL } from "../constants";

const httpRequest = axios.create({
  baseURL: URL.BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpRequest;
