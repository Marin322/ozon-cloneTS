// interface SearchFieldProps {
//   searchTag?: string;
// }
//({ searchTag }: SearchFieldProps)
function SearchField() {
  return (
    <div className="w-195 h-full bg-accent-primary rounded-xl p-0.5 pr-6 items-center grid grid-cols-[auto_24px] gap-6">
      <div className="w-full h-full bg-background-secondary rounded-[10px] flex">
        <button className="bg-background-primary p-1 ml-1 mt-1 mb-1 rounded-[10px] hover:cursor-pointer hover:text-accent-primary text-gray-500">Везде</button>
        <input className="w-full h-full pl-2" placeholder="Искать на Ozon"/>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="hover:cursor-pointer"
      >
        <path
          fill="white"
          d="M17.892 15.064a8 8 0 1 0-2.828 2.828l2.522 2.522a2 2 0 1 0 2.828-2.828zM11 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10"
        ></path>
      </svg>
    </div>
  );
}

export default SearchField;
