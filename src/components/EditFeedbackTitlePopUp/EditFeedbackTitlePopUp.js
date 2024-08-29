import GenericInput from "../../common/GenericInput/GenericInput";
import useAppStore from "../../store/appStore";
import { useState } from "react";
// import "./EditFeedbackTitlePopUp.css";

const EditFeedbackTitlePopUp = () => {
  const { formName, setFormName, modalStateHandler } = useAppStore((state) => ({
    formName: state.formName,
    setFormName: state.setFormName,
    modalStateHandler: state.modalStateHandler,
  }));

  const [nameValue, setNameValue] = useState(formName);

  const createButtonHandler = () => {
    if (nameValue.trim() === "") {
      return;
    }

    setFormName(nameValue);
    modalStateHandler();
  };

  const cancelButtonHandler = () => {
    setNameValue(formName);
    modalStateHandler();
  };
  return (
    <div className="feedbackPopUpContainer">
      <div className="title">Create Feedback Form</div>
      <GenericInput
        type="text"
        name="name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        placeholder="Your Form Name"
        className={"type1"}
      />
      <div className="buttonsContainer">
        <button className="button create" onClick={createButtonHandler}>
          SAVE
        </button>

        <button className="button cancel" onClick={cancelButtonHandler}>
          CANCEL
        </button>
      </div>
    </div>
  );
};
export default EditFeedbackTitlePopUp;
