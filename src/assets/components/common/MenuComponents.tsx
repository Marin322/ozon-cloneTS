import type { ReactElement } from "react";

interface MenuComponentProps {
    svgIcon: ReactElement;
    name: string;
};

function MenuComponent({svgIcon, name} : MenuComponentProps) {
    return (
        <button className="w-full h-full flex flex-col items-center content-center cursor-pointer text-xs text-gray-500 hover:text-accent-primary transition-colors duration-200">
            {svgIcon}
            {name}
        </button>
    );
};

export default MenuComponent;