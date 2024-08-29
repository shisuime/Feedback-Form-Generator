import TitleBar from "../TitleBar/TitleBar.js";
import { Outlet } from "react-router-dom";
import "./AdminPanelComponent.css";

const AdminPanelComponent = () => {
  return (
    <div className="adminPanelContainer">
      <TitleBar />
      <Outlet />
    </div>
  );
};

export default AdminPanelComponent;
