import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Move your store creator logic here, wrapped cleanly inside devtools
const storeApi = (set) => ({
  forms: {},

  initialiseForm: (id, namePayload) => set((state) => ({
    forms: {
      ...state.forms,
      [id]: {
        name: namePayload,
        formElements: state.forms[id]?.formElements || []
      }
    }
  })),

  modalState: false,
  modalStateHandler: () => set((state) => ({ modalState: !state.modalState })),

  saveAndpublishBtnState: false,
  setSaveAndpublishBtnState: (value) => set({ saveAndpublishBtnState: value }),

  fieldConfigState: false,
  fieldConfigStateHandler: () => set((state) => ({ fieldConfigState: !state.fieldConfigState })),

  fieldConfigType: null, // Just a clean string or null, no component objects!
  setFieldConfigType: (name) => set({ fieldConfigType: name }),

  dataFromFields: { inputData: "", errorData: null },
  setdataFromFields: (inputValue) => set({ dataFromFields: { inputData: inputValue, errorData: null } }),

  addFieldToForm: (formId, newField) => set((state) => {
    const targetForm = state.forms[formId];
    if (!targetForm) return state;
    if (targetForm.formElements.length >= 7) return state;

    return {
      forms: {
        ...state.forms,
        [formId]: {
          ...targetForm,
          formElements: [...targetForm.formElements, newField]
        }
      }
    };
  }),

  setFormElementsForId: (formId, newOrder) => set((state) => ({
    forms: {
      ...state.forms,
      [formId]: {
        ...state.forms[formId],
        formElements: newOrder
      }
    }
  })),

  deleteFieldFromForm: (formId, elementId) => set((state) => ({
    forms: {
      ...state.forms,
      [formId]: {
        ...state.forms[formId],
        formElements: state.forms[formId].formElements.filter((el) => el.id !== elementId)
      }
    }
  }))
});

// Pass options object as a second parameter to name the store instance in DevTools
const useAppStore = create(
  devtools(storeApi, { name: "FormBuilderStore" })
);

export default useAppStore;