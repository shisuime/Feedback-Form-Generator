import { Switch } from "@mui/material";
import GenericInput from "../GenericInput/GenericInput";
import { useState, useEffect, useRef } from "react";

const ToggleableInput = ({
  placeholder,
  labelvalue,
  labelClassname,
  type,
  initialState = false,
  text,
  onToggleChange, 
}) => {
  const [inputIsDisabled, setInputIsDisabled] = useState(initialState);
  const [inputValue, setInputValue] = useState("");

  // Keep a reference to the latest function payload without breaking effects
  const onToggleChangeRef = useRef(onToggleChange);

  // Sync the ref on every render so it always calls the freshest code
  useEffect(() => {
    onToggleChangeRef.current = onToggleChange;
  });

  // This effect will now safely run only when values change, squashing the warning!
  useEffect(() => {
    if (onToggleChangeRef.current) {
      onToggleChangeRef.current(inputIsDisabled, inputValue);
    }
  }, [inputIsDisabled, inputValue]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-5">
        <div className="text-sm font-medium text-gray-700">{text}</div>
        <Switch
          checked={inputIsDisabled}
          onChange={(e) => {
            setInputIsDisabled(e.target.checked);
            if (!e.target.checked) setInputValue(""); 
          }}
        />
      </div>

      <GenericInput
        placeholder={placeholder || ""}
        variant={type || "type1"}
        label={labelvalue || ""}
        labelClassName={labelClassname || ""}
        disabled={!inputIsDisabled}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default ToggleableInput;