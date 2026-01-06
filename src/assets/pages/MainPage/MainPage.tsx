import Header from "../../components/layout/Header"
import Catalog from "../../components/layout/Catalog";
function MainPage() {
    return (
        <div className="w-350 h-250 flex flex-col items-center gap-6">
            <Header/>
            <Catalog/>
        </div>
    );
};

export default MainPage;