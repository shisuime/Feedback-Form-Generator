import "./FieldConfig.css";
import backBlack from "../../assets/backBlack.png";
import useAppStore from "../../store/appStore";

const FieldConfig = () => {
  const {
    fieldConfigState,
    fieldConfigStateHandler,
    fieldConfigType,
    setFieldData,
  } = useAppStore((state) => ({
    fieldConfigState: state.fieldConfigState,
    fieldConfigStateHandler: state.fieldConfigStateHandler,
    fieldConfigType: state.fieldConfigType,
    setFieldData: state.setFieldData,
  }));

  if (!fieldConfigState) {
    return null;
  }
  const generateRandomId = (length = 8) => {
    return (
      "id_" + Math.random().toString(36).replace(/^.{2}/, "").slice(0, length)
    );
  };
  const saveBtnHandler = () => {
    const ranId = generateRandomId();
    setFieldData(ranId, "hey");
  };

  return (
    <div className="FieldConfigContainer">
      <div className="configHeader">
        <img
          src={backBlack}
          alt="none"
          onClick={fieldConfigStateHandler}
          style={{ cursor: "pointer" }}
        />
        <div>Back to Add Fields</div>
      </div>

      <div className="configBody">{fieldConfigType}</div>

      <div className="buttonContainer" style={{ paddingLeft: "20px" }}>
        <button className="saveButton" onClick={() => saveBtnHandler()}>
          SAVE
        </button>
        <button className="cancelButton">CANCEL</button>
      </div>
    </div>
  );
};

export default FieldConfig;
