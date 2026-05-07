
import CategoryFields from "../CategoryFields/CategoryFields"
import Modal from "../../common/Modal/Modal";
import EditFeedbackTitlePopUp from "../EditFeedbackTitlePopUp/EditFeedbackTitlePopUp";
import FieldConfig from "../FieldConfig/FieldConfig";
import Form from "../Form/Form"

const FormGeneration = () => {
  return (
    <>
      <Modal>
        {/* done styling */}
        <EditFeedbackTitlePopUp />
      </Modal>

      <div className="h-[calc(100vh-64px)] w-full flex relative">
        
        {/* Canvas */}
        <div className="h-full w-[80%] bg-[#f3f3f3] overflow-auto flex items-center justify-center">
          {/* done styling */}
            {/*--------------------- need arch design in store --------------------------------*/}
          <Form />
        </div>

        {/* Tools Panel */}
        <div className="h-full w-[20%] bg-white shadow-[-4px_0_8px_rgba(0,0,0,0.1)] relative z-10">
          <FieldConfig /> {/* done styling */}
          <CategoryFields /> {/* done styling */}
        </div>

      </div>
    </>
  );
};

export default FormGeneration;
