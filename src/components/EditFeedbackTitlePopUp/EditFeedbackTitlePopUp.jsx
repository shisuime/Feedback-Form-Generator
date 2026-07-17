import { useState } from "react";
import { useParams } from "react-router-dom";

import GenericInput from "../../common/GenericInput/GenericInput";
import useAppStore from "../../store/appStore";

const EditFeedbackTitlePopUp = () => {
  const { id } = useParams();

  const form = useAppStore((state) =>
  id ? state.forms[id] : undefined
);
  const updateFormName = useAppStore((state) => state.updateFormName);
  const modalStateHandler = useAppStore((state) => state.modalStateHandler);

  const [nameValue, setNameValue] = useState(form?.name || "");

 


  const saveButtonHandler = () => {
    if (!id) return;

    if (nameValue.trim() === "") return;

    updateFormName(id, nameValue.trim());
    modalStateHandler();
  };

  const cancelButtonHandler = () => {
    setNameValue(form?.name || "");
    modalStateHandler();
  };

  return (
    <div className="h-42.5 w-100 bg-white rounded-md flex flex-col justify-center gap-3 px-5">

      <div className="text-black font-semibold text-2xl">
        Edit Feedback Form
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
          onClick={saveButtonHandler}
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