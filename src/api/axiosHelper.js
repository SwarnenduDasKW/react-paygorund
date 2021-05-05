import axios from "axios";
import { BASE_URL } from "../constants";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export default apiInstance;
