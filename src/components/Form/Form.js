import "./Form.css";
import back from "../../assets/back.png";
import edit from "../../assets/edit.png";
import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const { formName, modalStateHandler, setSaveAndpublishBtnState } =
    useAppStore((state) => ({
      formName: state.formName,
      modalStateHandler: state.modalStateHandler,
      setSaveAndpublishBtnState: state.setSaveAndpublishBtnState,
    }));

  const backButtonHandler = () => {
    navigate("/");
    setSaveAndpublishBtnState(false);
  };

  return (
    <div className="formContainer">
      <div className="titleContainer">
        <img
          className="backIcon"
          src={back}
          alt="none"
          onClick={backButtonHandler}
        />
        <div className="formName">{formName}</div>
        <img
          className="editIcon"
          src={edit}
          alt="none"
          onClick={modalStateHandler}
        />
      </div>
      <div className="fields">
        <div className="placeHolderText">Add Field</div>
      </div>
    </div>
  );
};

export default Form;
