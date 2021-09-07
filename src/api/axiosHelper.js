import axios from "axios";
import { CAT_FACT_BASE_URL } from "../constants";

const apiInstance = axios.create({
    baseURL: CAT_FACT_BASE_URL,
});

export default apiInstance;
