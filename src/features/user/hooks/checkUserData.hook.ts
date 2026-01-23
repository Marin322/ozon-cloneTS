import { useCallback, useEffect } from "react"
import { userApi } from "../api";

export const useUserData = () => {

    const checkAndLoadUserData = useCallback(async () => {
        const userData = localStorage.getItem('userData');
        if (userData == null || undefined) {
            const newUserData = await userApi.getUserData();
            if (newUserData) { localStorage.setItem('userData', JSON.stringify(newUserData)); };
        };
    }, []);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            checkAndLoadUserData();
        };
    }, [checkAndLoadUserData]);
}