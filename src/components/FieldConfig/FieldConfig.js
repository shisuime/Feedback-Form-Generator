import "./FieldConfig.css";
import backBlack from "../../assets/backBlack.png";
import useAppStore from "../../store/appStore";
import Configs from "../Configs/Configs";

const FieldConfig = () => {
  const { fieldConfigState, fieldConfigStateHandler } = useAppStore(
    (state) => ({
      fieldConfigState: state.fieldConfigState,
      fieldConfigStateHandler: state.fieldConfigStateHandler,
    })
  );

  if (!fieldConfigState) {
    return null;
  }

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

      <div className="configBody">
        <Configs />
      </div>

      <div className="buttonContainer" style={{ paddingLeft: "20px" }}>
        <button className="saveButton">SAVE</button>
        <button className="cancelButton">CANCEL</button>
      </div>
    </div>
  );
};

export default FieldConfig;
