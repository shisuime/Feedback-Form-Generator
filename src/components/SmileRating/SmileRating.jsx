import { useState, useEffect } from "react";
import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.jsx";
import GenericSelect from "../../common/GenericSelect/GenericSelect.jsx";
import useAppStore from "../../store/appStore";

const SmileRating = () => {
  const setdataFromFields = useAppStore((state) => state.setdataFromFields);

  const [label, setLabel] = useState("");
  const [smileyCount, setSmileyCount] = useState(5);
  const [isRequired, setIsRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setdataFromFields({
      label,
      smileyCount,
      isRequired,
      errorMessage: isRequired ? errorMessage : ""
    });
  }, [label, smileyCount, isRequired, errorMessage, setdataFromFields]);

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

      <div className="text-sm font-medium text-gray-700 mt-2">
        How many smiley ratings do you want?
      </div>
      <GenericSelect 
        length={5} 
        value={smileyCount} 
        onChange={(val) => setSmileyCount(Number(val))} 
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

export default SmileRating;