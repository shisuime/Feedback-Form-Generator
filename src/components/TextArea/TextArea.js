import "./TextArea.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import { Switch } from "@mui/material";

const TextArea = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <GenericInput
        placeholder="Would you like to add a comment?"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
      />
      <div className="switchAndTextContainer">
        <Switch {...label} />
        <div>Required</div>
      </div>
      <div>
        <GenericInput
          placeholder="What is the message?"
          className={"type2"}
          label={"Error Message"}
          labelClassname={"labelType1"}
        />
        {/* <span style={{ color: "grey" }}>Helper text</span> */}
      </div>
    </>
  );
};

export default TextArea;
