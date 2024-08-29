import GenericInput from "../../common/GenericInput/GenericInput";
import useAppStore from "../../store/appStore";
import "./CreateFeedbackPopUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateFeedbackPopUp = () => {
  const [nameValue, setNameValue] = useState("");

  const navigate = useNavigate();

  const { setFormName, modalStateHandler, setSaveAndpublishBtnState } =
    useAppStore((state) => ({
      setFormName: state.setFormName,
      modalStateHandler: state.modalStateHandler,
      setSaveAndpublishBtnState: state.setSaveAndpublishBtnState,
    }));

  const createButtonHandler = () => {
    if (nameValue.trim() === "") {
      return;
    }

    setFormName(nameValue);
    modalStateHandler();
    setSaveAndpublishBtnState(true);
    navigate("/formGeneration");
  };

  const cancelButtonHandler = () => {
    setNameValue("");
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
          CREATE
        </button>

        <button className="button cancel" onClick={cancelButtonHandler}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default CreateFeedbackPopUp;
