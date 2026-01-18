export interface LoginRequest {
    phoneNumber: string;
};

export interface RegisterRequest {
    phoneNumber: string;
};

export interface VerifyRequest {
    phoneNumber: string;
};
/**
 * Interface performs for registration with verify
 */
export interface RegisterWithVerify {
    /**
     * The phone number starts with +7
     */
    phoneNumber: string;
    /**
     * The code has only 4 digits
     */
    code: string;
};

export interface LoginResponse {
    authCode: string;
};
