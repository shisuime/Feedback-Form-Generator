import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryFields from "../CategoryFields/CategoryFields";
import Modal from "../../common/Modal/Modal";
import EditFeedbackTitlePopUp from "../EditFeedbackTitlePopUp/EditFeedbackTitlePopUp";
import FieldConfig from "../FieldConfig/FieldConfig";
import Form from "../Form/Form";

import useAppStore from "../../store/appStore";

const FormGeneration = () => {
  const { id } = useParams();

  const hydrateForm = useAppStore((state) => state.hydrateForm);

  const [fieldConfigState, setFieldConfigState] = useState(false);

  const fieldConfigStateHandler = () => {
    setFieldConfigState((prev) => !prev);
  };

  useEffect(() => {
    if (!id) return;

    const fetchForm = async () => {
      try {
        const response = await fetch(`http://localhost:5000/forms/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch form");
        }

        const form = await response.json();

        hydrateForm(id, {
          name: form.name,
          status: form.status,
          createdBy: form.createdBy,
          formElements: form.formElements,
          createdAt: form.createdAt,
        });
      } catch (err) {
        console.error("Failed to load form", err);
      }
    };

    fetchForm();
  }, [id, hydrateForm]);

  return (
    <>
      <Modal>
        <EditFeedbackTitlePopUp />
      </Modal>

      <div className="flex-1 w-full flex relative min-h-0 overflow-hidden">

        <div className="flex-1 min-h-0 bg-slate-100 overflow-y-auto flex items-center justify-center p-8">
          <div className="w-full max-w-4xl flex items-center justify-center">
            <Form />
          </div>
        </div>

        <aside className="w-80 min-h-0 bg-white border-l border-slate-200 flex flex-col relative z-10 shrink-0 shadow-sm">

          <div className="flex-1 overflow-y-auto min-h-0">

            {fieldConfigState ? (
              <FieldConfig
                currentId={id}
                fieldConfigState={fieldConfigState}
                fieldConfigStateHandler={fieldConfigStateHandler}
              />
            ) : (
              <div className="p-5">
                <CategoryFields
                  fieldConfigStateHandler={fieldConfigStateHandler}
                />
              </div>
            )}

          </div>

        </aside>

      </div>
    </>
  );
};

export default FormGeneration;