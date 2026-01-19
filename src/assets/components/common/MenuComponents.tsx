import type { ReactElement } from "react";

interface MenuComponentProps {
  svgIcon: ReactElement;
  name: string;
  onClick?: () => void;
  dropdownComponent?: ReactElement;
  isAuth?: boolean;
  lastname?: string;
};

function MenuComponent({
  svgIcon,
  name,
  onClick,
  dropdownComponent,
  isAuth,
  lastname
}: MenuComponentProps) {
  return (
    <div className="relative group">
      {!isAuth ? (
        <button
        onClick={onClick}
        className="w-full h-full flex flex-col items-center content-center cursor-pointer text-xs text-gray-500 hover:text-accent-primary transition-colors duration-200"
      >
        {svgIcon}
        {name}
      </button>
      ) : (
        <button className="w-full h-full flex flex-col items-center content-center cursor-pointer text-xs text-gray-500">
          <img className="bg-gray-400 rounded-[50%] w-6 h-6"/>
          <p>{lastname}</p>
        </button>
      )}
      {dropdownComponent && !isAuth && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="bg-white rounded-2xl shadow-xl shadow-black min-w-70 p-4">
            {dropdownComponent}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuComponent;
