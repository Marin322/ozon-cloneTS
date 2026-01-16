import { useState } from "react";
import type { AuthWindowProps } from "../types";
import { PhoneInput } from "./index";
export function AuthWindow({ isOpen, onClose }: AuthWindowProps) {
  const [phone, setPhone] = useState('');
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 flex justify-center bg-black opacity-50"
      ></div>

      <div className="flex justify-center fixed z-50 pt-10 transition-all duration-200">
        <div className="w-110 h-170 bg-background-secondary rounded-4xl grid grid-rows-10 pl-6 pr-6">
          <div className="grid grid-cols-2">
            <div className="flex items-end">
              <img
                width={150}
                height={150}
                src="https://ir-3.ozone.ru/graphics/ozon-id-v2.svg"
              />
            </div>
            <div className="flex justify-end pt-3">
              <div className="w-8 h-8 rounded-[50%] bg-gray-200 hover:bg-gray-300 cursor-pointer flex items-center justify-center" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path
                    fill="#586b7c"
                    d="M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.467 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.767 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7L6.233 8l-3.7-3.7a1.25 1.25 0 0 1 0-1.767"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-5 font-bold text-[31px]">Введите номер телефона</div>
          <div className="text-left text-[18px]">Мы отправим код или позвоним. Отвечать на звонок не нужно. Код может прийти на почту или в СМС</div>
          <div className="w-full h-15 mt-10"><PhoneInput value={phone} onChange={setPhone}/></div>
        </div>
      </div>
    </>
  );
}
