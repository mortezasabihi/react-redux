import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com", // or we can use process.env.REACT_APP_API_URL
});

export default api;
