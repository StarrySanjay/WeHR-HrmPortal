import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div>
      <div className="main-layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}

        <div className="content-wrapper">
          {/* TopBar */}

          <Topbar />

          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
