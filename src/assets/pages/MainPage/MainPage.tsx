import Header from "../../components/layout/Header";
import Catalog from "../../components/layout/Catalog";
import { useState } from "react";
function MainPage() {
  const [authIsOpen, setAuthIsOpen] = useState(false);

  const authWindowOpen: () => void = () => {
    setAuthIsOpen((prev) => !prev);
  };

  return (
    <div className="w-350 h-250 flex flex-col items-center gap-6 relative">
      <Header onClick={authWindowOpen} />
      <Catalog />
      {authIsOpen && (
        <>
          <div onClick={authWindowOpen} className="fixed inset-0 flex justify-center bg-black opacity-50"></div>
          
          <div className="flex justify-center fixed z-50 pt-10 transition-all duration-200">
            <div className="w-100 h-170 bg-background-primary rounded-4xl"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default MainPage;
