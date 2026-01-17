import type { LoginWithServiceProps } from "../types";
export function LoginWithServiceButton({image, text}: LoginWithServiceProps) {
    return (
        <button className="flex w-full h-full bg-background-primary">
            {image}
            {text}
        </button>
    );
};