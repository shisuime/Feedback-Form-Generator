import { Outlet } from "react-router-dom";
import TitleBar from "../TitleBar/TitleBar.jsx";


const AdminPanelComponent = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <TitleBar />
      <Outlet />
    </div>
  );
};

export default AdminPanelComponent;
