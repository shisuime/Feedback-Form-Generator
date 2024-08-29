import "./FormsPanel.css";
import CreateForm from "../CreateForm/CreateForm";
import Modal from "../../common/Modal/Modal";
import CreateFeedbackPopUp from "../CreateFeedbackPopUp/CreateFeedbackPopUp";

const FormsPanel = () => {
  return (
    <>
      <Modal>
        <CreateFeedbackPopUp />
      </Modal>
      <div className="formsContainer">
        <CreateForm />
      </div>
    </>
  );
};

export default FormsPanel;
