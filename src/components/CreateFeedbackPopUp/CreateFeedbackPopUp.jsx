import useAppStore from "../../store/appStore"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GenericInput from "../../common/GenericInput/GenericInput"

const CreateFeedbackPopUp = () => {
  const [nameValue, setNameValue] = useState("");
  const navigate = useNavigate();

const setFormName=useAppStore(state=>state.setFormName)
const modalStateHandler=useAppStore(state=>state.modalStateHandler)
const setSaveAndpublishBtnState=useAppStore(state=>state.setSaveAndpublishBtnState)

  const createButtonHandler = () => {
    if (nameValue.trim() === "") return;

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
    <div className="h-42.5 w-100 bg-white rounded-lg shadow-xl flex flex-col justify-center gap-2.5 px-5">
      
      {/* Title */}
      <div className="text-black font-semibold text-2xl">
        Create Feedback Form
      </div>

      {/* Input */}
      <GenericInput
        type="text"
        name="name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        placeholder="Your Form Name"
        className="type1"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-5">
        <button
          className="bg-white font-extrabold text-base cursor-pointer text-[#147051]"
          onClick={createButtonHandler}
        >
          CREATE
        </button>

        <button
          className="bg-white font-extrabold text-base cursor-pointer text-[#A5A5A5]"
          onClick={cancelButtonHandler}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default CreateFeedbackPopUp;
