import { endPoints } from "../../../endpoints";
import type { UserData } from "../types";
export const userApi = {
    getUserData: async (): Promise<UserData> => {
        try {
            let userId = localStorage.getItem('userId');
            const response = await fetch(`${endPoints.BaseUrl}${endPoints.user.userData}/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return await response.json();
        }
        catch { throw new Error("okak")}
    },
};