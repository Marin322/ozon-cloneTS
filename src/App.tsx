import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./assets/pages/MainPage/MainPage";
import ProductPage from "./assets/pages/ProductPage/ProductPage";
import PersonalAccount from "./assets/pages/PersonalAccount/PersonalAccount";
import { useEffect, useState } from "react";
import { useUserData } from "./features/user/hooks";
import Header from "./assets/components/layout/Header";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [authIsOpen, setAuthIsOpen] = useState(false);

  useUserData();
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (userId != null || undefined) {
      setIsAuth(true);
    }
  }, []);

  const authWindowOpen: () => void = () => {
    setAuthIsOpen(prev => !prev);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 bg-background-primary overflow-auto">
      <div className="w-350">
        <Header onClick={authWindowOpen} isAuth={isAuth}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage authIsOpen={authIsOpen} setAuthIsOpen={authWindowOpen} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/my/main" element={<PersonalAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
