import { create } from "zustand";
import { devtools } from "zustand/middleware";

const storeApi = (set) => ({
  // ===========================
  // Forms
  // ===========================
  forms: {},

  initialiseForm: (id, name) =>
    set((state) => ({
      forms: {
        ...state.forms,
        [id]: {
          name,
          formElements: [],
        },
      },
    })),

  hydrateForm: (id, form) =>
    set((state) => ({
      forms: {
        ...state.forms,
        [id]: form,
      },
    })),
    
  hydrateAllForms: (forms) =>
  set({
    forms,
  }),  

  deleteForm: (id) =>
  set((state) => {
    const updatedForms = { ...state.forms };

    delete updatedForms[id];

    return {
      forms: updatedForms,
    };
  }),

  updateFormName: (id, newName) =>
    set((state) => {
      if (!state.forms[id]) return state;

      return {
        forms: {
          ...state.forms,
          [id]: {
            ...state.forms[id],
            name: newName,
          },
        },
      };
    }),

  addFieldToForm: (formId, newField) =>
    set((state) => {
      const targetForm = state.forms[formId];

      if (!targetForm) return state;

      if (targetForm.formElements.length >= 7) return state;

      return {
        forms: {
          ...state.forms,
          [formId]: {
            ...targetForm,
            formElements: [...targetForm.formElements, newField],
          },
        },
      };
    }),

  setFormElementsForId: (formId, newOrder) =>
    set((state) => ({
      forms: {
        ...state.forms,
        [formId]: {
          ...state.forms[formId],
          formElements: newOrder,
        },
      },
    })),

  deleteFieldFromForm: (formId, elementId) =>
    set((state) => ({
      forms: {
        ...state.forms,
        [formId]: {
          ...state.forms[formId],
          formElements: state.forms[formId].formElements.filter(
            (el) => el.id !== elementId
          ),
        },
      },
    })),

  // ===========================
  // UI State
  // ===========================

  modalState: false,

  modalStateHandler: () =>
    set((state) => ({
      modalState: !state.modalState,
    })),

  saveAndpublishBtnState: false,

  setSaveAndpublishBtnState: (value) =>
    set({
      saveAndpublishBtnState: value,
    }),

  fieldConfigState: false,

  fieldConfigStateHandler: () =>
    set((state) => ({
      fieldConfigState: !state.fieldConfigState,
    })),

  fieldConfigType: null,

  setFieldConfigType: (name) =>
    set({
      fieldConfigType: name,
    }),

  dataFromFields: {
    inputData: "",
    errorData: null,
  },

  setdataFromFields: (inputValue) =>
    set({
      dataFromFields: {
        inputData: inputValue,
        errorData: null,
      },
    }),
});

const useAppStore = create(
  devtools(storeApi, {
    name: "FormBuilderStore",
  })
);

export default useAppStore;