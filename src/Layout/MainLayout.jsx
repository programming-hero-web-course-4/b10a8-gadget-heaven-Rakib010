import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>

      <Outlet />

      {/* Footer */}
    </div>
  );
};

export default MainLayout;
