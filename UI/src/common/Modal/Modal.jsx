import useAppStore from "../../store/appStore";

const Modal = ({ children }) => {
  const modalState  = useAppStore((state) => (state.modalState));

  if (!modalState) return null;

  return (
    <div className="fixed inset-0 h-screen w-full bg-black/25 z-9999 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Modal;
