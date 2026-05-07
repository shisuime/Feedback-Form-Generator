import { Switch } from "@mui/material";
import GenericInput from "../../common/GenericInput/GenericInput.jsx";

const RadioButton = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="flex flex-col gap-2.5 pr-5 w-full">
      <GenericInput
        placeholder="Enter Text"
        className="type4"
        label="Label"
        labelClassname="labelType2"
      />

      {/* Required Toggle */}
      <div className="flex items-center gap-4">
        <Switch {...label} />
        <div className="text-sm font-medium text-gray-700">
          Required
        </div>
      </div>

      {/* Options Title */}
      <div className="pl-2.5 font-semibold text-sm">
        Options
      </div>

      {/* Option Inputs */}
      <GenericInput placeholder="Enter Option" className="type5" />
      <GenericInput placeholder="Enter Option" className="type5" />
      <GenericInput placeholder="Enter Option" className="type5" />
    </div>
  );
};

export default RadioButton;
