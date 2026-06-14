import { Outlet } from "react-router-dom";
import TitleBar from "../components/TitleBar/TitleBar";

const AdminPanelpage = () => {
  
   return (

    <div className="min-h-screen flex flex-col pt-16 bg-slate-50 text-slate-900 antialiased">
      <TitleBar />
   
      <div className="flex-1 flex flex-col min-h-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanelpage;
