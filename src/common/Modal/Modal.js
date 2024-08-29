import "./Modal.css";
import useAppStore from "../../store/appStore";

const Modal = ({ children }) => {
  const { modalState } = useAppStore((state) => ({
    modalState: state.modalState,
  }));
  if (!modalState) return null;
  return <div className="modalContainer">{children}</div>;
};

export default Modal;
