import "./ToggleableInput.css";
import { Switch } from "@mui/material";
import GenericInput from "../GenericInput/GenericInput";
import { useState } from "react";

const ToggleableInput = ({
  placeholder,
  labelvalue,
  labelClassname,
  type,
  initialState,
  text,
}) => {
  const [inputIsDisabled, setInputIsDisabled] = useState(initialState);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <div className="switchAndTextContainer">
        <div>{text}</div>
        <Switch
          {...label}
          checked={inputIsDisabled}
          onChange={(e) => setInputIsDisabled(e.target.checked)}
        />
      </div>
      <GenericInput
        placeholder={placeholder || ""}
        className={type || "type1"}
        label={labelvalue || ""}
        labelClassname={labelClassname || ""}
        disabled={!inputIsDisabled}
      />
    </>
  );
};

export default ToggleableInput;
