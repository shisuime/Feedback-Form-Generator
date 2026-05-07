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
    <div className="flex flex-col gap-3 w-full">
      {/* Switch + Text */}
      <div className="flex items-center gap-5">
        <div className="text-sm font-medium text-gray-700">
          {text}
        </div>

        <Switch
          {...label}
          checked={inputIsDisabled}
          onChange={(e) => setInputIsDisabled(e.target.checked)}
        />
      </div>

      {/* Input */}
      <GenericInput
        placeholder={placeholder || ""}
        className={type || "type1"}
        label={labelvalue || ""}
        labelClassname={labelClassname || ""}
        disabled={!inputIsDisabled}
      />
    </div>
  );
};

export default ToggleableInput;
