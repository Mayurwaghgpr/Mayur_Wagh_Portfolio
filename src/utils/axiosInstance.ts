import axios from "axios";
console.log(import.meta.env.VITE_BASE_URL);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {},
});

export default axiosInstance;
