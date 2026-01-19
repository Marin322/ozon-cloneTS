import SearchField from "../ui/SearchField";
import MenuComponent from "../common/MenuComponents";
import QuestionComponent from "../common/QuestionComponents";
import type { UserData } from "../../../features/user/types";

interface props {
  onClick: () => void;
  isAuth: boolean;
};

function Header({ onClick, isAuth }: props) {
  let userData = localStorage.getItem('userData');
  let newUserData: UserData | null = null;
  if (userData) {
    newUserData = JSON.parse(userData);
  };
  if (!userData) {
    return
  }
  const authDropContent = (
    <div className="text-[14px]">
      <p className="text-left">
        Войдите, чтобы делать покупки, отслеживать заказы и пользоваться
        персональными скидками и баллами. После входа вы сможете создать аккаунт
        юрлица.
      </p>
      <button onClick={onClick} className="bg-accent-primary text-white font-bold w-full pb-2 pt-2 mt-2 rounded-[10px] cursor-pointer">Войти или зарегистрироваться</button>
      <button className="bg-[#d3e7f0] hover:bg-[#d3e7ff] text-accent-primary font-bold w-full pb-2 pt-2 mt-4 rounded-[10px] cursor-pointer">Личный кабинет</button>
    </div>
  );

  let userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M7.995 2C6.154 2 4.662 3.465 4.662 5.273c0 1.807 1.492 3.272 3.333 3.272 1.84 0 3.332-1.465 3.332-3.272C11.327 3.465 9.835 2 7.995 2M5.161 9.262c.424-.17.889-.043 1.319.11a4.6 4.6 0 0 0 1.515.264c.518 0 1.031-.095 1.504-.26.437-.153.909-.279 1.337-.105.73.297 1.551.899 2.02 1.616a.876.876 0 0 1-.082 1.067C11.65 13.216 9.811 14 7.994 14s-3.643-.782-4.768-2.045a.88.88 0 0 1-.083-1.068c.471-.722 1.285-1.332 2.018-1.625"
      ></path>
    </svg>
  );
  let orderIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14.692 5.694c.368-.205.365-.469-.009-.664C13.367 4.343 12.708 4 12 4s-1.367.343-2.683 1.03l-2 1.044c-1.614.842-2.42 1.263-2.869 2.02C4 8.85 4 9.79 4 11.673v1.652c0 1.883 0 2.824.448 3.58s1.255 1.178 2.869 2.02l2 1.044C10.633 20.657 11.292 21 12 21s1.367-.343 2.683-1.03l2-1.044c1.614-.842 2.42-1.263 2.869-2.02.448-.756.448-1.697.448-3.58v-1.652c0-1.883 0-2.824-.448-3.58-.329-.556-.851-.93-1.744-1.423-.367-.203-.389-.204-.763.004L11 10c-.344.19-.739.394-.91.77-.09.197-.09.375-.09.73V14a1 1 0 0 1-2 0v-4a1 1 0 0 1 .514-.874z"
      ></path>
    </svg>
  );
  let favIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 10.163C3 7.262 5.13 5 8 5c1.929 0 3.244 1.102 4 2.066C12.756 6.102 14.071 5 16 5c2.87 0 5 2.264 5 5.163 0 4.561-4.568 7.856-8.243 9.66a1.71 1.71 0 0 1-1.514 0C7.568 18.02 3 14.724 3 10.163"
      ></path>
    </svg>
  );
  let cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.925 5.371a1 1 0 1 0-1.858-.742L6.317 9h-1.2c-1.076 0-1.614 0-1.913.346-.3.346-.222.878-.067 1.942l.271 1.864c.475 3.265.902 4.898 2.03 5.873s2.778.975 6.08.975h.96c3.302 0 4.953 0 6.08-.975 1.128-.975 1.559-2.608 2.034-5.873l.271-1.864c.155-1.064.233-1.596-.067-1.942S19.96 9 18.883 9h-1.205l-1.75-4.371a1 1 0 0 0-1.857.742L15.523 9h-7.05zM10.997 14v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0M14 13a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1"
      ></path>
    </svg>
  );
  let ozonCardIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path
        fill="currentColor"
        d="M15.5 8c0 5.833 0 5.833-7.5 5.833S.5 13.833.5 8c0-.417 0-.833.833-.833h13.334c.833 0 .833.416.833.833m-.833-2.5H1.333C.5 5.5.5 5.083.5 4.667c0-2.5 1.667-2.5 7.5-2.5s7.5 0 7.5 2.5c0 .416 0 .833-.833.833"
      ></path>
    </svg>
  );
  let ticketsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path
        fill="currentColor"
        d="M11.753 1.743c.834-.834 2.348-1.816 3.334-.83s0 2.497-.833 3.331c-.617.617-1.212 1.227-1.803 1.832l-.131.134c-.152.22-.193.463-.145.96.117 1.193.241 2.223.359 3.203.107.89.209 1.737.296 2.63.117 1.19.078 1.665-.756 1.664-.766-.001-1-.002-1.166-.42-.331-.833-2.075-4.586-2.075-4.586a47 47 0 0 1-1.939 1.677q-.491.408-.976.821c0 .838 0 2.5-.417 2.5h-.833c-.225 0-.417-.452-.63-.952-.18-.426-.377-.887-.62-1.131-.28-.28-.766-.483-1.198-.662-.476-.199-.887-.37-.887-.588v-1.25c0-.275.741-.183 1.482-.091.37.046.741.091 1.02.091l2.5-2.914S2.583 5.412 1.75 5.078c-.417-.167-.417-.4-.417-1.165 0-.834.477-.872 1.668-.753.892.09 1.74.193 2.63.302.98.12 2.01.246 3.205.365.795.08.94-.073 1.382-.54a50 50 0 0 1 1.099-1.11z"
      ></path>
    </svg>
  );
  let businessIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path
        fill="currentColor"
        d="M3.11 4.088c.188-1.094.62-1.947 1.327-2.554C5.397.711 6.69.5 8 .5s2.603.211 3.563 1.034c.708.607 1.14 1.46 1.327 2.554 2.238.38 2.61 1.256 2.61 3.079 0 2.279-1.307 3.095-5 3.298-.745.041-.75.008-.836-.463a8 8 0 0 0-.067-.335c-.15-.658-.574-.834-1.597-.834s-1.447.176-1.597.834q-.043.195-.067.335c-.085.47-.091.504-.836.463-3.693-.203-5-1.02-5-3.298 0-1.823.372-2.699 2.61-3.079m1.748-.182A55 55 0 0 1 8 3.833c1.238 0 2.274.021 3.142.073-.157-.535-.396-.878-.663-1.107C9.98 2.372 9.19 2.167 8 2.167s-1.98.205-2.479.632c-.267.23-.506.572-.663 1.107M8 12.167a4.6 4.6 0 0 1-.833-.059c-.39-.074-.582-.244-.768-.41-.211-.188-.417-.371-.899-.405a27 27 0 0 1-1.094-.102c-.814-.09-1.667-.135-2.456-.368-.333-.099-.617-.183-.617.51 0 3.41 1.25 4.167 6.667 4.167s6.667-.758 6.667-4.167c0-.693-.284-.609-.617-.51-.789.233-1.642.278-2.456.368-.345.038-.7.075-1.094.102-.482.034-.688.217-.899.405-.186.166-.377.336-.768.41a4.6 4.6 0 0 1-.833.059"
      ></path>
    </svg>
  );

  return (
    <header className="w-full h-45 bg-background-secondary rounded-b-3xl grid grid-rows-3 gap-2 p-4">
      <div className="gap-4 flex">
        <img src="https://ir-3.ozone.ru/s3/cms/81/t48/wc200/logo_ozon_1.png" />
        <button className="bg-accent-primary flex text-text-secondary items-center p-4 rounded-xl font-bold gap-2 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=""
          >
            <path
              fill="currentColor"
              d="M4 7.556C4 4.628 4.628 4 7.556 4s3.555.628 3.555 3.556-.627 3.555-3.555 3.555S4 10.484 4 7.556m0 8.888c0-2.928.628-3.555 3.556-3.555s3.555.627 3.555 3.555S10.484 20 7.556 20 4 19.372 4 16.444M16.444 4c-2.928 0-3.555.628-3.555 3.556s.627 3.555 3.555 3.555S20 10.484 20 7.556 19.372 4 16.444 4m-3.555 12.444c0-2.928.627-3.555 3.555-3.555S20 13.516 20 16.444 19.372 20 16.444 20s-3.555-.628-3.555-3.556"
            ></path>
          </svg>
          Каталог
        </button>
        <SearchField />
        <div className="grid grid-cols-4 gap-2">
          <MenuComponent
            svgIcon={userIcon}
            onClick={onClick}
            name="Войти"
            isAuth={isAuth}
            lastname={newUserData?.phoneNumber}
            dropdownComponent={authDropContent}
          />
          <MenuComponent svgIcon={orderIcon} name="Заказы" />
          <MenuComponent svgIcon={favIcon} name="Избранное" />
          <MenuComponent svgIcon={cartIcon} name="Корзина" />
        </div>
      </div>
      <div className="grid grid-cols-[auto_auto]">
        <div className="flex gap-3">
          <QuestionComponent svgIcon={ozonCardIcon} name="Ozon Карта" />
          <QuestionComponent svgIcon={ticketsIcon} name="Билеты, отели" />
          <QuestionComponent svgIcon={businessIcon} name="Для бизнеса" />
          <QuestionComponent name="Одежда" />
          <QuestionComponent name="Электроника" />
          <QuestionComponent name="Дом и сад" />
          <QuestionComponent name="Товары за 1₽" />
          <QuestionComponent name="Сертификаты" />
        </div>
        <div className="flex justify-end items-center gap-2">
          <button className="cursor-pointer text-gray-700">
            <p>
              Челябинск • <a className="text-blue-600">Укажите адрес</a>
            </p>
          </button>
          <button className="bg-gray-100 mt-4 mb-4 flex pr-1 pl-1 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
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
            <p>RU</p>
          </button>
        </div>
      </div>
      <div>ff</div>
    </header>
  );
}

export default Header;
