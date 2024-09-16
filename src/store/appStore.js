import { create } from "zustand";

const useAppStore = create((set) => ({
  modalState: false,
  modalStateHandler: () => set((state) => ({ modalState: !state.modalState })),

  formName: "",

  setFormName: (name) =>
    set(() => ({
      formName: name,
    })),

  saveAndpublishBtnState: false,
  setSaveAndpublishBtnState: (value) =>
    set(() => ({ saveAndpublishBtnState: value })),

  fieldConfigState: false,
  fieldConfigStateHandler: () =>
    set((state) => ({ fieldConfigState: !state.fieldConfigState })),

  fieldConfigType: {
    name: null,
    component: null,
  },
  setFieldConfigType: (name, component) =>
    set((state) => ({
      fieldConfigType: {
        ...state.fieldConfigType,
        name: name,
        component: component,
      },
    })),

  dataFromFields: {
    inputData: "",
    errorData: null,
  },
  setdataFromFields: (inputValue) =>
    set((state) => ({
      dataFromFields: {
        inputData: inputValue,
        errorData: null,
      },
    })),

  fieldData: {
    id: null,
    data: {
      name: null,
      label: null,
      optionCount: null,
    },
  },
  setFieldData: (id, name, label, optionCount) =>
    set((state) => ({
      fieldData: {
        ...state.fieldData,
        id: id,
        data: {
          ...state.fieldData.data,
          name: name,
          label: label,
          optionCount: optionCount,
        },
      },
    })),
}));

export default useAppStore;
