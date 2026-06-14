import axios from "axios";

const api = axios.create({
  baseURL: "https://ats-backend-frxm.onrender.com/api",
});

export default api;


