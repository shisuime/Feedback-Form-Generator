import GenericInput from "../../common/GenericInput/GenericInput";
import useAppStore from "../../store/appStore";
import { useState } from "react";

const EditFeedbackTitlePopUp = () => {
  const formName = useAppStore((state) => state.formName);
const setFormName = useAppStore((state) => state.setFormName);
const modalStateHandler = useAppStore((state) => state.modalStateHandler);

  const [nameValue, setNameValue] = useState(formName);

  const createButtonHandler = () => {
    if (nameValue.trim() === "") return;

    setFormName(nameValue);
    modalStateHandler();
  };

  const cancelButtonHandler = () => {
    setNameValue(formName);
    modalStateHandler();
  };

  return (
    <div className="h-42.5 w-100 bg-white rounded-md flex flex-col justify-center gap-3 px-5">
      
      <div className="text-black font-semibold text-2xl">
        Create Feedback Form
      </div>

      <GenericInput
        type="text"
        name="name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        placeholder="Your Form Name"
        className="w-full"
      />

      <div className="flex gap-5 justify-end">
        <button
          onClick={createButtonHandler}
          className="font-extrabold text-base text-[#147051] cursor-pointer hover:opacity-80 transition"
        >
          SAVE
        </button>

        <button
          onClick={cancelButtonHandler}
          className="font-extrabold text-base text-[#a5a5a5] cursor-pointer hover:opacity-80 transition"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default EditFeedbackTitlePopUp;
