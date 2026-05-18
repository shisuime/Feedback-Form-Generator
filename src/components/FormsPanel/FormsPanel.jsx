import CreateFeedbackPopUp from "../CreateFeedbackPopUp/CreateFeedbackPopUp";
import CreateForm from "../CreateForm/CreateForm";
import Modal from "../../common/Modal/Modal";

const FormsPanel = () => {
  return (
    <>
      <Modal>
        <CreateFeedbackPopUp />
      </Modal>

      {/* Fills remaining screen space seamlessly with vertical scrolling enabled for a growing list of forms */}
      <div className="flex-1 bg-slate-50 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Dashboard Header Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Feedback Forms</h1>
            <p className="text-sm text-slate-500 mt-1">
              Create new feedback templates or manage your existing forms.
            </p>
          </div>

          {/* Form Cards Grid */}
          <div className="flex flex-wrap gap-6 items-start">
            <CreateForm />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FormsPanel;