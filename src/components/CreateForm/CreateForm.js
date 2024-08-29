import Plus from "../../assets/Plus.png";
import "./CreateForm.css";
import useAppStore from "../../store/appStore";

const CreateForm = () => {
  const { modalStateHandler } = useAppStore((state) => ({
    modalStateHandler: state.modalStateHandler,
  }));

  return (
    <div className="createFormContainer" onClick={modalStateHandler}>
      <img src={Plus} className="plusIcon" alt="none" />
      <h1 className="newFormText">New Form</h1>
    </div>
  );
};

export default CreateForm;
