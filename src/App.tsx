import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./assets/pages/MainPage/MainPage";
import ProductPage from "./assets/pages/ProductPage/ProductPage";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 bg-background-primary overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
