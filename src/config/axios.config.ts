import axios from "axios";
import { getToken } from "@/utils/helper";

const apiUrl = process.env.REACT_APP_API_ENDPOINT || "https://restura.onrender.com";

// http://localhost:4000
// https://restura.onrender.com

const apiKey = process.env.REACT_APP_API_KEY || "5267556B58703273357638792F423F45";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const publicRequest = axios.create({
  baseURL: apiUrl,
});

const privateRequest = axios.create({
  baseURL: apiUrl,
})

// Add a request interceptor
publicRequest.interceptors.request.use(
  async (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    config.headers["api_key"] = apiKey;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

privateRequest.interceptors.request.use(
  async (config: any) => {
    const token = await getToken();
    if (config.headers === undefined) {
      config.headers = {};
    }
    config.headers["api_key"] = apiKey;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token || "";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { publicRequest, privateRequest }
