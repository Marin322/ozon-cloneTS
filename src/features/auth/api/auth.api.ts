import type { LoginRequest, RegisterRequest, LoginResponse } from "../types";
import { endPoints } from "../../../endpoints";

export const authApi = {
    login: async (data: LoginRequest): Promise<LoginResponse> => {
        const response = await fetch(`${endPoints.BaseUrl}${endPoints.auth.login}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        });
        return response.json();
    },

    register: async (data: RegisterRequest) => {
        const response = await fetch(`${endPoints.BaseUrl}${endPoints.auth.register}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
};