import Header from "../../components/layout/Header";
import Catalog from "../../components/layout/Catalog";
import { useState } from "react";
import { AuthWindow } from "../../../features/auth/components";
interface props {
  isAuth: boolean;
};

function MainPage({isAuth}:props) {
  const [authIsOpen, setAuthIsOpen] = useState(false);

  const authWindowOpen: () => void = () => {
    setAuthIsOpen((prev) => !prev);
  };

  return (
    <div className="w-350 h-250 flex flex-col items-center gap-6 relative">
      <Header onClick={authWindowOpen} isAuth={isAuth}/>
      <Catalog />
      {authIsOpen && (
        <AuthWindow onClose={() => setAuthIsOpen(false)}/>
      )}
    </div>
  );
}

export default MainPage;
