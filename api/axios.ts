import axios from "axios";

export const NewAxios = axios.create({
  baseURL: "http://localhost:4200/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});