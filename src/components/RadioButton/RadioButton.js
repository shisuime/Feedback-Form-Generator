import "./RadioButton.css";
import { Switch } from "@mui/material";
import GenericInput from "../../common/GenericInput/GenericInput.js";

const RadioButton = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="radioButtonContainer">
      <GenericInput
        placeholder="Enter Text"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Switch {...label} />
        <div>Required</div>
      </div>
      <div style={{ paddingLeft: "10px", fontWeight: "bold" }}>Options</div>
      <GenericInput placeholder="Enter Option" className={"type5"} />
      <GenericInput placeholder="Enter Option" className={"type5"} />
      <GenericInput placeholder="Enter Option" className={"type5"} />
    </div>
  );
};

export default RadioButton;
