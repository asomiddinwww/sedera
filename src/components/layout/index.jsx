import Header from "..";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <main className="pt-25">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
