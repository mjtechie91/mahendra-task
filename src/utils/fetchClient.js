import axios from "axios";

const apiKey = "17d94b92-754f-46eb-99a0-65be65b5d18f";

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/", //Setting the base url so that it's not needed to provide full endpoint when we request cat API
});

// Added a axios request interceptor to add api-key header
axiosInstance.interceptors.request.use(
  (config) => {
    // Attaching the API key to request headers
    config.headers["x-api-key"] = `${apiKey}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
