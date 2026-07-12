import { useState, useEffect } from "react";
import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.jsx";
import useAppStore from "../../store/appStore";

const TextArea = () => {
  const setdataFromFields = useAppStore((state) => state.setdataFromFields);

  const [label, setLabel] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync state modifications straight up to our global store slice
  useEffect(() => {
    setdataFromFields({
      label,
      isRequired,
      errorMessage: isRequired ? errorMessage : ""
    });
  }, [label, isRequired, errorMessage, setdataFromFields]);

  return (
    <div className="flex flex-col gap-2.5 pr-5 w-full">
      <GenericInput
        placeholder="Would you like to add a comment?"
        variant="type4"
        label="Label"
        labelClassName="labelType2"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <ToggleableInput
        type="type1"
        labelvalue="Error Message"
        labelClassname="labelType1"
        text="Required"
        initialState={isRequired}
        onToggleChange={(checked, inputValue) => {
          setIsRequired(checked);
          setErrorMessage(inputValue);
        }}
      />
    </div>
  );
};

export default TextArea;