import CategoryFields from "../CategoryFields/CategoryFields";
import Modal from "../../common/Modal/Modal";
import EditFeedbackTitlePopUp from "../EditFeedbackTitlePopUp/EditFeedbackTitlePopUp";
import FieldConfig from "../FieldConfig/FieldConfig";
import Form from "../Form/Form";

const FormGeneration = () => {
  return (
    <>
      <Modal>
      
        <EditFeedbackTitlePopUp />
      </Modal>

     
      
      <div className="flex-1 w-full flex relative min-h-0 overflow-hidden">

        {/* Canvas Area (Left Side) */}
     
        <div className="flex-1 min-h-0 bg-slate-100 overflow-y-auto flex items-center justify-center p-8">
          <div className="w-full max-w-4xl flex items-center justify-center">
            {/*--------------------- need arch design in store --------------------------------*/}
            <Form />
          </div>
        </div>

        {/* Tools Panel Sidebar (Right Side) */}
     
        <aside className="w-80 min-h-0 bg-white border-l border-slate-200 flex flex-col relative z-10 shrink-0 shadow-sm">
          {/* Scrollable area inside the panel so configurations never overflow the viewport */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 min-h-0">
            <div className="p-5">
              <FieldConfig />
            </div>
            {/* <div className="p-5">
              <CategoryFields />
            </div> */}
          </div>
        </aside>

      </div>
    </>
  );
};

export default FormGeneration;