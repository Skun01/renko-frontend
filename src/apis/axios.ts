
import axios, { AxiosError } from "axios";
import { STORAGE_KEYS } from "../constants/api.constants";
import type { ApiResponse } from "../types/ApiResponse";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiClient = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.error("Phiên đăng nhập hết hạn.");
                window.location.href = '/login';
            }
            
            if (error.response.data) {
                return error.response.data;
            }
        }
        
        const genericErrorResponse: ApiResponse = {
            data: null,
            success: false,
            message: "Lỗi kết nối mạng hoặc máy chủ không phản hồi.",
            errors: undefined,
            timestamp: new Date(),
            statusCode: error.code === 'ECONNABORTED' ? 408 : 503,
        };
        
        return genericErrorResponse;
    }
);

export default apiClient;