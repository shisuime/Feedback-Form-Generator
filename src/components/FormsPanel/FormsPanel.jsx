
import CreateFeedbackPopUp from "../CreateFeedbackPopUp/CreateFeedbackPopUp"
import CreateForm from "../CreateForm/CreateForm";
import Modal from "../../common/Modal/Modal";

const FormsPanel = () => {
  return (
    <>
      <Modal>
        <CreateFeedbackPopUp/>
      </Modal>
      <div className="flex flex-wrap gap-20 pt-30 pl-7.5 bg-[#f3f3f3] cursor-pointer relative h-screen">
        <CreateForm />
      </div>
    </>
  );
};

export default FormsPanel;
