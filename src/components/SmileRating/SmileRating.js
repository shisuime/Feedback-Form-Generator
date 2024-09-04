import "./SmileRating.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.js";
import GenericSelect from "../../common/GenericSelect/GenericSelect.js";

const SmileRating = () => {
  return (
    <div className="smileRatingContainer">
      <GenericInput
        placeholder="Would you like to add a comment?"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
      />
      <div>How many stars do you want?</div>
      <GenericSelect length={10} />
      <ToggleableInput
        type={"type2"}
        labelvalue={"Error Message"}
        labelClassname={"labelType1"}
        text={"Required"}
        initialState={false}
      />
    </div>
  );
};

export default SmileRating;
