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
  console.log(fieldConfigType, "type checking");
  if (!fieldConfigState) {
    return null;
  }
  const generateRandomId = (length = 8) => {
    return (
      "id_" + Math.random().toString(36).replace(/^.{2}/, "").slice(0, length)
    );
  };
  const saveBtnHandler = (name) => {
    const ranId = generateRandomId();
    setFieldData(ranId, name);
    fieldConfigStateHandler();
  };

  const cancelHandler = () => {
    fieldConfigStateHandler();
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

      <div className="configBody">{fieldConfigType?.component}</div>

      <div className="buttonContainer" style={{ paddingLeft: "20px" }}>
        <button
          className="saveButton"
          onClick={() => saveBtnHandler(fieldConfigType?.name)}
        >
          SAVE
        </button>
        <button className="cancelButton" onClick={cancelHandler}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default FieldConfig;
