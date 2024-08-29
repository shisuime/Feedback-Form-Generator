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

  fieldConfigType: "",
  setFieldConfigType: (type) => set((state) => ({ fieldConfigType: type })),
}));

export default useAppStore;
