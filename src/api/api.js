import axios from "axios";

const baseURL = "http://localhost:3002";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "text/plain", // Burada "text/plain" olarak ayarlandı, isteğe bağlı olarak değiştirilebilir
  },
});

export default axiosInstance;
