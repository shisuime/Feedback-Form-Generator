import { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import useAppStore from "../../store/appStore";

const RadioButton = () => {
  const setdataFromFields = useAppStore((state) => state.setdataFromFields);

  const [label, setLabel] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  useEffect(() => {
    setdataFromFields({
      label,
      isRequired,
      // Filter out empty items to make clean preview chips later
      options: options.filter((opt) => opt.trim() !== "")
    });
  }, [label, isRequired, options, setdataFromFields]);

  return (
    <div className="flex flex-col gap-2.5 pr-5 w-full">
      <GenericInput
        placeholder="Select an option"
        variant="type4"
        label="Label"
        labelClassName="labelType2"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <div className="flex items-center gap-4 py-1">
        <Switch 
          checked={isRequired} 
          onChange={(e) => setIsRequired(e.target.checked)} 
        />
        <div className="text-sm font-medium text-gray-700">Required</div>
      </div>

      <div className="pl-1 font-semibold text-sm text-slate-500 mt-2">Options</div>

      {options.map((option, idx) => (
        <GenericInput 
          key={idx}
          placeholder={`Option ${idx + 1}`} 
          variant="outlined" 
          className="h-10! text-sm"
          value={option}
          onChange={(e) => handleOptionChange(idx, e.target.value)}
        />
      ))}
    </div>
  );
};

export default RadioButton;