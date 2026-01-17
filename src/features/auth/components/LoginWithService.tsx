import type { LoginWithServiceProps } from "../types";
export function LoginWithServiceButton({image, text}: LoginWithServiceProps) {
    return (
        <button className="flex w-full h-full bg-background-primary hover:bg-gray-200 gap-3 font-bold text-text-primary justify-center items-center cursor-pointer rounded-2xl">
            {image}
            {text}
        </button>
    );
};