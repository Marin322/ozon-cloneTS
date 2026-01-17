import type { LoginRequest, RegisterRequest, LoginResponse } from "../types";
import { endPoints } from "../../../endpoints";

export const authApi = {
    /**
     * The function performs an API request for authorization.
     * @async
     * @function login
     * @param {LoginRequest} data - Login details (phone number)
     * @returns {Promise<LoginResponse>}  Object with user ID
     */
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

    /**
     * The function performs an API request for authorization.
     * @async
     * @function register
     * @param {RegisterRequest} data Register details (phone number)
     */
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