import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CreateFormPopUp from "../CreateFormPopUp/CreateFormPopUp";
import CreateFormIconCard from "../CreateFormIconCard/CreateFormIconCard";
import Modal from "../../common/Modal/Modal";

import useAppStore from "../../store/appStore";

const FormsPanel = () => {
  const navigate = useNavigate();

  const forms = useAppStore((state) => state.forms);

  const hydrateAllForms = useAppStore(
    (state) => state.hydrateAllForms
  );

  useEffect(() => {
    const loadedForms = {};

    Object.keys(localStorage).forEach((key) => {
      if (!key.startsWith("form_")) return;

      try {
        const id = key.replace("form_", "");

        loadedForms[id] = JSON.parse(localStorage.getItem(key));
      } catch (err) {
        console.error(err);
      }
    });

    hydrateAllForms(loadedForms);
  }, [hydrateAllForms]);

  const handleFormCardClick = (id) => {
    navigate(`/formGeneration/${id}`);
  };

  return (
    <>
      <Modal>
        <CreateFormPopUp />
      </Modal>

      <div className="flex-1 bg-slate-50 p-6 md:p-10 overflow-y-auto min-h-screen">

        <div className="max-w-7xl w-full mx-auto flex flex-col">

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Feedback Forms
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Create new feedback templates or manage your existing forms.
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-6 items-start">

            <CreateFormIconCard />

            {Object.entries(forms).map(([id, form]) => (
              <div
                key={id}
                onClick={() => handleFormCardClick(id)}
                className="h-96 w-72 flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md cursor-pointer p-6"
              >
                <div className="text-xl font-bold text-center break-words">
                  {form.name}
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default FormsPanel;