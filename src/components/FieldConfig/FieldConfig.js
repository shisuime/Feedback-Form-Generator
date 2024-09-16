import "./FieldConfig.css";
import backBlack from "../../assets/backBlack.png";
import useAppStore from "../../store/appStore";

const FieldConfig = () => {
  const {
    fieldConfigState,
    fieldConfigStateHandler,
    fieldConfigType,
    setFieldData,
    dataFromFields,
  } = useAppStore((state) => ({
    fieldConfigState: state.fieldConfigState,
    fieldConfigStateHandler: state.fieldConfigStateHandler,
    fieldConfigType: state.fieldConfigType,
    setFieldData: state.setFieldData,
    dataFromFields: state.dataFromFields,
  }));
  // console.log(fieldConfigType, "type checking");
  if (!fieldConfigState) {
    return null;
  }
  const generateRandomId = (length = 8) => {
    return (
      "id_" + Math.random().toString(36).replace(/^.{2}/, "").slice(0, length)
    );
  };
  const saveBtnHandler = (name, label) => {
    const ranId = generateRandomId();
    setFieldData(ranId, name, label);
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
          onClick={() =>
            saveBtnHandler(fieldConfigType?.name, dataFromFields?.inputData)
          }
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
