import { useState, useEffect } from "react";
import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.jsx";
import GenericSelect from "../../common/GenericSelect/GenericSelect.jsx";
import useAppStore from "../../store/appStore";

const NumericRating = () => {
  const setdataFromFields = useAppStore((state) => state.setdataFromFields);

  const [label, setLabel] = useState("");
  const [boxCount, setBoxCount] = useState(10);
  const [isRequired, setIsRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setdataFromFields({
      label,
      boxCount,
      isRequired,
      errorMessage: isRequired ? errorMessage : ""
    });
  }, [label, boxCount, isRequired, errorMessage, setdataFromFields]);

  return (
    <div className="flex flex-col gap-2.5 pr-5 w-full">
      <GenericInput
        placeholder="Enter your rating question"
        variant="type4"
        label="Label"
        labelClassName="labelType2"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <div className="text-sm font-medium text-gray-700 mt-2">
        How many boxes do you want?
      </div>
      <GenericSelect 
        length={10} 
        value={boxCount} 
        onChange={(e) => setBoxCount(e.target.value)} 
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

export default NumericRating;