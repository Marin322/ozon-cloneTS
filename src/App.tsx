import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./assets/pages/MainPage/MainPage";
import ProductPage from "./assets/pages/ProductPage/ProductPage";
import { useEffect, useState } from "react";
import { useUserData } from "./features/user/hooks";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useUserData();
  useEffect(() => {
    let userId = localStorage.getItem('userId');
    if (userId != null || undefined) {
      setIsAuth(true);
    };
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 bg-background-primary overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage isAuth={isAuth}/>} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
