export interface AuthWindowProps {
    isOpen: boolean;
    onClose: () => void;
};

export interface PhoneInputeProps {
    value: string;
    onChange: (value: string) => void;
};