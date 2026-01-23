import type { UserData } from "../../../features/user/types";

function PersonalAccount() {
  const rawUserData = localStorage.getItem("userData");
  let userData: UserData | null = null;
  if (rawUserData) {
    userData = JSON.parse(rawUserData);
  };
  return (
    <div className="grid grid-cols-[200px_auto] w-350 h-250 flex-col items-center gap-6 relative">
      <div className="w-50 h-full bg-background-secondary rounded-3xl p-5">
        <img className="bg-gray-400 w-25 h-25 rounded-[50%]" />
        <p>{userData?.lastname}</p>
        <p>{userData?.firstname}</p>
      </div>
      <div className="w-full h-full bg-background-secondary rounded-3xl p-5">
        <img src="https://ir-3.ozone.ru/s3/cms/c0/t8d/wc1200/1175_155_7_1.png" className="rounded-[15px]"/>
        <p className="mt-10 text-[20px] text-left font-bold">Мои финансы</p>
        <div className="w-140 h-45 mt-5 bg-background-secondary shadow-lg rounded-2xl grid grid-cols-[65%_auto]">
            <div className="text-left p-5 gap-3 flex flex-col">
                <p className="font-bold text-[20px]">Ozon карта</p>
                <p>Получайте уникальные скидки за оплату покупок</p>
                <button className="bg-accent-primary w-30 pt-1 pb-1 text-text-secondary rounded-[10px]">Открыть карту</button>
            </div>
            <img className="w-45 h-45" src="https://ir-3.ozone.ru/s3/ob-loader/wallet/wc1200/Coin_fill2.png"/>
        </div>
        <div className="mt-10 w-full bg-background-primary rounded-[10px] p-3 text-left text-[14px]">
            <p className="text-gray-500">На Ozon применяются рекомендательные технологии</p>
            <a className="text-accent-primary">Подробнее</a>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
