import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.jsx";
import GenericSelect from "../../common/GenericSelect/GenericSelect.jsx";

const StarRating = () => {
  return (
    <div className="flex flex-col gap-2.5 pr-5 w-full">
      <GenericInput
        placeholder="Would you like to add a comment?"
        className="type4"
        label="Label"
        labelClassname="labelType2"
      />

      <div className="text-sm font-medium text-gray-700">
        How many Stars do you want?
      </div>

      <GenericSelect length={5} />

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

export default StarRating;
