import type { LoginRequest, RegisterRequest } from "../types/auth.types";
import apiClient from "./axios";
import { API_ENDPOINTS } from "../constants/api.constants";
import type { ApiResponse } from "../types/ApiResponse";


export const login = async(loginForm: LoginRequest) : Promise<ApiResponse> => {
    const response = await apiClient.post(
        API_ENDPOINTS.AUTH.LOGIN,
        loginForm
    );
    return response.data;
}

export const register = async(registerForm: RegisterRequest) : Promise<ApiResponse> => {
    const response = await apiClient.post(
        API_ENDPOINTS.AUTH.REGISTER,
        registerForm
    );
    return response.data;
}