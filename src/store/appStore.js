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

  fieldConfigType: null,
  setFieldConfigType: (component) => set({ fieldConfigType: component }),
}));

export default useAppStore;
