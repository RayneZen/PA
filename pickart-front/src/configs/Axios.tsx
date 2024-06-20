
import axios from "axios"
import { API_URL } from "../../Const";

export const AxiosApi = axios.create({
    baseURL: `${API_URL}`,
});

