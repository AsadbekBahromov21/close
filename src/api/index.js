import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://trade.namtech.uz",
});
mainUrl.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
mainUrl.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    return error;
  }
);
export default mainUrl;
