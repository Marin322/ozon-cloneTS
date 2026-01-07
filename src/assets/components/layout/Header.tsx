import SearchField from "../ui/SearchField";
function Header() {
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
        <SearchField/>
      </div>
      <div>ff</div>
      <div>ff</div>
    </header>
  );
}

export default Header;
