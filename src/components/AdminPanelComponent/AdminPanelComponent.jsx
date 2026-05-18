import { Outlet } from "react-router-dom";
import TitleBar from "../TitleBar/TitleBar.jsx";

const AdminPanelComponent = () => {
  return (
    // min-h-screen gives a full-viewport base, flex-col stacks the header and content
    // pt-16 creates safe padding for the fixed TitleBar so child content isn't covered
    <div className="min-h-screen flex flex-col pt-16 bg-slate-50 text-slate-900 antialiased">
      <TitleBar />
      
      {/* flex-1 lets the main viewport grow dynamically, min-h-0 prevents accidental flex breaks */}
      <main className="flex-1 flex flex-col min-h-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanelComponent;