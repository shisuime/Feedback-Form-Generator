import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CreateFormPopUp from "../CreateFormPopUp/CreateFormPopUp";
import CreateFormIconCard from "../CreateFormIconCard/CreateFormIconCard";
import Modal from "../../common/Modal/Modal";
import { IoClose } from "react-icons/io5";
import useAppStore from "../../store/appStore";

const FormsPanel = () => {
  const navigate = useNavigate();

  const forms = useAppStore((state) => state.forms);

  const hydrateAllForms = useAppStore(
    (state) => state.hydrateAllForms
  );
  const deleteForm = useAppStore((state) => state.deleteForm);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch("http://localhost:5000/forms");

        if (!response.ok) {
          throw new Error("Failed to fetch forms");
        }

        const data = await response.json();

        const loadedForms = {};

        data.forEach((form) => {
          loadedForms[form._id] = {
            name: form.name,
            status: form.status,
            createdBy: form.createdBy,
            formElements: form.formElements,
            createdAt: form.createdAt,
          };
        });

        hydrateAllForms(loadedForms);
      } catch (err) {
        console.error(err);
      }
    };

    fetchForms();
  }, [hydrateAllForms]);


  const handleDeleteForm = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/forms/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete form");
      }

      deleteForm(id);
    } catch (err) {
      console.error(err);
      alert("Failed to delete form.");
    }
  };

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
                className="group relative h-96 w-72 flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md cursor-pointer p-6 transition-all"
              >
                {/* Delete Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteForm(id);
                  }}
                  className="absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center
                 text-slate-400 hover:text-red-500 hover:bg-slate-100
                 opacity-0 group-hover:opacity-100
                 transition-all duration-200 cursor-pointer"
                >
                  <IoClose size={20} />
                </button>

                <div className="text-xl font-bold text-center wrap-break-words">
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