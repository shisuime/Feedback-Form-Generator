import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.jsx";

const TextArea = ({ value, setValue }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2.5 pr-5 w-full">
      <GenericInput
        placeholder="Would you like to add a comment?"
        className="type4"
        label="Label"
        labelClassname="labelType2"
        value={value?.inputData}
        onChange={handleInputChange}
      />

      <ToggleableInput
        type="type2"
        labelvalue="Error Message"
        labelClassname="labelType1"
        text="Required"
        initialState={false}
      />
    </div>
  );
};

export default TextArea;
