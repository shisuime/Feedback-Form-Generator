import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useAppStore = create(devtools((set) => ({
  forms:{},
  initialiseForm:(id,namePayload) => set((state)=>({   
    forms:{
      ...state.forms,
      [id]:{
        name:namePayload
      }

    }
  })),

  modalState: false,
  modalStateHandler: () => set((state) => ({ modalState: !state.modalState })),

  formName: "",
  setFormName: (name) => set({ formName: name }),

  saveAndpublishBtnState: false,
  setSaveAndpublishBtnState: (value) => set({ saveAndpublishBtnState: value }),


  formElements: [],
  
  // Adds a field only if it doesn't exist and limit hasn't been reached
  addField: (newField) => set((state) => {
    if (state.formElements.length >= 7) return state;
    const exists = state.formElements.some((el) => el.id === newField.id);
    if (exists) return state;
    return { formElements: [...state.formElements, newField] };
  }),

  // Used for Drag and Drop reordering
  setFormElements: (newOrder) => set({ formElements: newOrder }),

  // Used for deleting fields
  deleteField: (id) => set((state) => ({
    formElements: state.formElements.filter((el) => el.id !== id)
  })),

  // --- CONFIG & FIELD DATA (Cleanup) ---
  fieldConfigState: false,
  fieldConfigStateHandler: () => set((state) => ({ fieldConfigState: !state.fieldConfigState })),

  fieldConfigType: { name: null, component: null },
  setFieldConfigType: (name, component) => set({ fieldConfigType: { name, component } }),

  dataFromFields: { inputData: "", errorData: null },
  setdataFromFields: (inputValue) => set({ dataFromFields: { inputData: inputValue, errorData: null } }),

  // Keep fieldData if you need it for the "Editing" state/modal
  fieldData: { id: null, data: { name: null, label: null, optionCount: null } },
  setFieldData: (id, name, label, optionCount) =>
    set({
      fieldData: { id, data: { name, label, optionCount } },
    }),
})));

export default useAppStore;