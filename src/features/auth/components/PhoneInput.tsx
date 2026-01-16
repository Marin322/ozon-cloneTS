import { useState } from "react";
import type { PhoneInputeProps } from "../types";
export function PhoneInput({ value, onChange }: PhoneInputeProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    onChange(digits);
  };

  return (
    <div className="w-full h-full border-2 border-gray-300 hover:border-accent-primary rounded-md grid grid-cols-[100px_auto]">
      <div className="m-1 w-22 rounded-[10px] bg-gray-100 grid grid-cols-3 items-center p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <rect
            width="19"
            height="13"
            x="2.5"
            y="5.5"
            stroke="#001A34"
            stroke-opacity=".16"
            opacity=".75"
            rx="2.5"
          ></rect>
          <path
            fill="white"
            d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"
          ></path>
          <path fill="#0055CC" d="M3 10h18v4H3z"></path>
          <path
            fill="#F0121F"
            d="M3 14h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          ></path>
        </svg>
        <div>+7</div>
        <div>↓</div>
      </div>
      <div className="grid grid-rows-[auto_1fr] relative">
        {/* Верхний блок - плавающий placeholder */}
        <div className="px-3 pt-1 transition-all duration-200">
        </div>
        
        {/* Нижний блок - инпут */}
        <div className="w-full h-full">
          <input
            type="tel"
            onChange={handleChange}
            placeholder="999 999 99 99"
            className="w-full h-full bg-transparent px-3
              focus:outline-none text-lg
              placeholder:text-gray-400"
            maxLength={18} // для форматированного номера
          />
        </div>
      </div>
    </div>
  );
}
