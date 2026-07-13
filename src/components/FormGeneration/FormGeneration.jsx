import CategoryFields from "../CategoryFields/CategoryFields";
import Modal from "../../common/Modal/Modal";
import EditFeedbackTitlePopUp from "../EditFeedbackTitlePopUp/EditFeedbackTitlePopUp";
import FieldConfig from "../FieldConfig/FieldConfig";
import Form from "../Form/Form";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FormGeneration = () => {
  const {id}=useParams()
  const [fieldConfigState, setFieldConfigState] = useState(false);

  const fieldConfigStateHandler = () => {
    setFieldConfigState(!fieldConfigState);
  };

  return (
    <>
      <Modal>
        <EditFeedbackTitlePopUp />
      </Modal>

      <div className="flex-1 w-full flex relative min-h-0 overflow-hidden">

        {/* Canvas Area (Left Side) */}
        <div className="flex-1 min-h-0 bg-slate-100 overflow-y-auto flex items-center justify-center p-8">
          <div className="w-full max-w-4xl flex items-center justify-center">
            <Form />
          </div>
        </div>

        {/* Tools Panel Sidebar (Right Side) */}
        <aside className="w-80 min-h-0 bg-white border-l border-slate-200 flex flex-col relative z-10 shrink-0 shadow-sm">
          {/* View switcher container */}
          <div className="flex-1 overflow-y-auto min-h-0">
            {fieldConfigState ? (
              // View A: Configuration Mode
              <FieldConfig 
                currentId={id}
                fieldConfigState={fieldConfigState} 
                fieldConfigStateHandler={fieldConfigStateHandler}
              />
            ) : (
              // View B: Category Selection Mode
              <div className="p-5">
                <CategoryFields fieldConfigStateHandler={fieldConfigStateHandler} />
              </div>
            )}
          </div>
        </aside>

      </div>
    </>
  );
};

export default FormGeneration;