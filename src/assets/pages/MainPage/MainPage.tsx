import Catalog from "../../components/layout/Catalog";
import { AuthWindow } from "../../../features/auth/components";
interface props {
  authIsOpen: boolean;
  setAuthIsOpen: (value: boolean) => void;
};

function MainPage({authIsOpen, setAuthIsOpen}:props) {
  return (
    <div className="w-350 h-250 flex flex-col items-center gap-6 relative">
      <Catalog />
      {authIsOpen && (
        <AuthWindow onClose={() => setAuthIsOpen(false)}/>
      )}
    </div>
  );
}

export default MainPage;
