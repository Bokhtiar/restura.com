import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT || "https://restura.onrender.com";

// http://localhost:4000
// https://restura.onrender.com

const apiKey = process.env.REACT_APP_API_KEY || "5267556B58703273357638792F423F45";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const publicRequest = axios.create({
  baseURL: apiUrl,
});
 
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
    // Do something with request error
    return Promise.reject(error);
  }
);

export {publicRequest}
