import { useState } from "react";
import type { AuthWindowProps, LoginRequest, RegisterWithVerify } from "../types";
import { PhoneInput, LoginWithServiceButton } from "./index";
import { authApi } from "../api";
export function AuthWindow({ onClose }: AuthWindowProps) {
  const [phone, setPhone] = useState("+7");
  const [verifyWindowIsOpen, setVerifyWindowIsOpen] = useState(false);
  const [correctCode, setCorrectCode] = useState<string>('');
  const [inputCode, setInputCode] = useState<string>('');
  const AuthorizeAccount = async () => {
    try {
      const LoginRequestData: LoginRequest = {
        phoneNumber: phone,
      };
      const result = await authApi.login(LoginRequestData);
      setCorrectCode(result.authCode);
      changeVerifyWindowState();
    } catch {}
  };

  const VerifyAccount = async () => {
    try {
      const RegisterWithVerifyData: RegisterWithVerify = {
        phoneNumber: phone,
        code: inputCode
      };
      const result = await authApi.verify(RegisterWithVerifyData);
      console.log(result)
      localStorage.setItem('userId', result);
      changeVerifyWindowState();
    }
    catch {}
  };

  const changeVerifyWindowState = () => {
    setVerifyWindowIsOpen((prev) => !prev);
  };

  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 flex justify-center bg-black opacity-50"
      ></div>

      <div className="flex justify-center fixed z-50 pt-10 transition-all duration-200">
        <div className="w-110 h-170 bg-background-secondary rounded-4xl grid grid-rows-[70px_70px_100px_120px_80px_10px_120px_120px_10px] pl-6 pr-6">
          <div className="grid grid-cols-2">
            <div className="flex items-end">
              <img
                width={150}
                height={150}
                src="https://ir-3.ozone.ru/graphics/ozon-id-v2.svg"
              />
            </div>
            <div className="flex justify-end pt-3">
              <div
                className="w-8 h-8 rounded-[50%] bg-gray-200 hover:bg-gray-300 cursor-pointer flex items-center justify-center"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path
                    fill="#586b7c"
                    d="M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.467 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.767 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7L6.233 8l-3.7-3.7a1.25 1.25 0 0 1 0-1.767"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="font-bold text-[31px] mt-5">
            Введите номер телефона
          </div>
          <div className="text-left text-[18px]">
            Мы отправим код или позвоним. Отвечать на звонок не нужно. Код может
            прийти на почту или в СМС
          </div>
          <div className="w-full h-15">
            <PhoneInput value={phone} onChange={setPhone} />
          </div>
          <div className="w-full -mt-6.25">
            <button
              onClick={AuthorizeAccount}
              className="bg-accent-primary text-text-secondary rounded-2xl font-bold p-4 text-[18px] w-full cursor-pointer"
            >
              Войти
            </button>
          </div>
          <div className="-mt-8.25 text-gray-400">------ или ------</div>
          <div className="flex gap-4 flex-col">
            <div className="w-full h-1/2">
              <LoginWithServiceButton
                text="Войти с VK ID"
                image={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#0077ff"
                      d="M3.406 3.406C2 4.812 2 7.075 2 11.6v.8c0 4.525 0 6.788 1.406 8.194S7.075 22 11.6 22h.8c4.525 0 6.788 0 8.194-1.406S22 16.925 22 12.4v-.8c0-4.525 0-6.788-1.406-8.194S16.925 2 12.4 2h-.8C7.075 2 4.812 2 3.406 3.406m1.969 4.677h2.283c.075 3.817 1.759 5.434 3.092 5.767V8.083h2.15v3.292c1.317-.142 2.7-1.642 3.167-3.292h2.15c-.359 2.034-1.859 3.534-2.925 4.15 1.066.5 2.775 1.809 3.425 4.175H16.35c-.508-1.583-1.775-2.808-3.45-2.975v2.975h-.258c-4.559 0-7.159-3.125-7.267-8.325"
                    ></path>
                  </svg>
                }
              />
            </div>
            <div className="w-full h-1/2">
              <LoginWithServiceButton
                text="Вход через Госуслуги"
                image={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="url(#ic_m_multicolor_gosuslugi_filled__a)"
                      d="M14.51 2.486C13.666 2.204 12.788 2 12 2s-1.666.204-2.51.486c-.857.287-1.743.677-2.564 1.099a20 20 0 0 0-2.232 1.323c-.609.42-1.172.875-1.491 1.292-.585.763-.869 1.742-1.02 2.71C2.03 9.892 2 10.97 2 12s.03 2.108.183 3.09c.151.968.435 1.947 1.02 2.71.32.417.882.872 1.491 1.292.635.44 1.41.902 2.232 1.323.821.422 1.707.812 2.564 1.099.844.282 1.723.486 2.51.486.788 0 1.666-.204 2.51-.486a19 19 0 0 0 2.564-1.099 20 20 0 0 0 2.232-1.323c.609-.42 1.172-.875 1.491-1.292.585-.763.869-1.742 1.02-2.71.153-.982.183-2.06.183-3.09s-.03-2.108-.183-3.09c-.151-.968-.435-1.947-1.02-2.71-.32-.417-.882-.872-1.491-1.292a20 20 0 0 0-2.232-1.323 19 19 0 0 0-2.564-1.099M3 10a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                    ></path>
                    <defs>
                      <linearGradient
                        id="ic_m_multicolor_gosuslugi_filled__a"
                        x1="12"
                        x2="12"
                        y1="4"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2A64AE"></stop>
                        <stop offset="1" stop-color="#F1405A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                }
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-3 text-[16px] text-accent-primary font-bold">
            <a href="">Войти по почте</a>
            <a href="">Не могу войти</a>
          </div>
        </div>
        {verifyWindowIsOpen && (
          <div className="fixed w-full h-full flex z-51 items-start justify-center">
            <div className="w-full h-full mt-0 bg-black opacity-35" onClick={changeVerifyWindowState}></div>
            <div className="w-100 h-65 bg-background-secondary fixed mt-50 rounded-2xl p-2">
              <p className="font-bold text-3xl">{correctCode}</p>
              <p className="text-left">В случае, если вы не регистрировались до этого при вводе кода будет зарегистрирован новый аккаунт</p>
              <div className="w-full h-14 bg-background-primary mt-4 rounded-2xl">
                <input className="w-full h-full rounded-2xl focus:outline-none p-4 text-center text-2xl" value={inputCode} onChange={onChangeCode} maxLength={4}/>
              </div>
              <button className="w-full h-10 bg-accent-primary text-text-secondary mt-4 rounded-2xl cursor-pointer" onClick={VerifyAccount}>Продолжить</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
