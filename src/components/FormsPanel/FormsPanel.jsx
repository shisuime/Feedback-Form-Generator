import CreateFormPopUp from "../CreateFormPopUp/CreateFormPopUp";
import CreateFormIconCard from "../CreateFormIconCard/CreateFormIconCard";
import Modal from "../../common/Modal/Modal";
import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";

const FormsPanel = () => {
  const navigate = useNavigate();

  const forms = useAppStore((state) => state.forms);

  const handleFormCardClick = (uniqueId) =>{
    navigate(`/formGeneration/${uniqueId}`);
  }

  return (
    <>
      <Modal>
        <CreateFormPopUp />
      </Modal>

      {/* Main Container */}
      <div className="flex-1 bg-slate-50 p-6 md:p-10 overflow-y-auto min-h-screen">
        <div className="max-w-7xl w-full mx-auto flex flex-col">
          
          {/* Dashboard Header Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Feedback Forms</h1>
            <p className="text-sm text-slate-500 mt-1">
              Create new feedback templates or manage your existing forms.
            </p>
          </div>

          {/* Horizontal Layout Grid */}
          <div className="flex flex-row flex-wrap gap-6 items-start justify-start">
            
            {/* 1. The Plus Button Component */}
            <CreateFormIconCard />

            {/* 2. Dynamically mapped Form Cards from Zustand */}
            {Object.entries(forms).map(([id, formData]) => (
              <div
                key={id}
                className="h-96 w-72 flex flex-col items-center justify-center rounded-xl border border-slate-200/60 shadow-sm bg-white hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer text-slate-900 font-bold tracking-tight text-xl group shrink-0 p-6"
              onClick={()=>handleFormCardClick(id)}
              >
                <div className="text-center group-hover:text-blue-600 transition-colors duration-200 wrap-break-word w-full">
                  {formData.name}
                </div>            
              </div>
            ))}

          </div>
          
        </div>
      </div>
    </>
  );
};

export default FormsPanel;