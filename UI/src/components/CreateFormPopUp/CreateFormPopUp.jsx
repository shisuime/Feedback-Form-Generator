import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GenericInput from "../../common/GenericInput/GenericInput";

const CreateFormPopUp = () => {
  const [nameValue, setNameValue] = useState("");
  const navigate = useNavigate();

  const initialiseForm = useAppStore((state) => state.initialiseForm);
  const modalStateHandler = useAppStore((state) => state.modalStateHandler);
  const setSaveAndpublishBtnState = useAppStore(
    (state) => state.setSaveAndpublishBtnState
  );

  const createButtonHandler = async () => {
    if (nameValue.trim() === "") return;

    try {
      const response = await fetch("http://localhost:5000/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
        }),
      });

      const data = await response.json();

      initialiseForm(data.id, data.name);

      modalStateHandler();

      setSaveAndpublishBtnState(true);

      navigate(`/formGeneration/${data.id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to create form.");
    }
  };

  const cancelButtonHandler = () => {
    setNameValue("");
    modalStateHandler();
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-100 p-6 flex flex-col gap-5">

      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Create Feedback Form
        </h2>
      </div>

      <div className="w-full">
        <GenericInput
          type="text"
          name="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Your Form Name"
          className="type1 w-full"
        />
      </div>

      <div className="flex justify-end items-center gap-4 pt-2">
        <button
          className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
          onClick={cancelButtonHandler}
        >
          CANCEL
        </button>

        <button
          className="px-4 py-2 text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 active:bg-emerald-100 rounded-lg transition-colors duration-150 cursor-pointer"
          onClick={createButtonHandler}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CreateFormPopUp;