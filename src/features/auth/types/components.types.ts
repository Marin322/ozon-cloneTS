export interface AuthWindowProps {
    onClose: () => void;
};

export interface PhoneInputeProps {
    value: string;
    onChange: (value: string) => void;
};

export interface LoginWithServiceProps {
    image: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    text: string;
};