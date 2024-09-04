import "./StarRating.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.js";
import GenericSelect from "../../common/GenericSelect/GenericSelect.js";

const StarRating = () => {
  return (
    <div className="StarRatingContainer">
      <GenericInput
        placeholder="Would you like to add a comment?"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
      />
      <div>How many Stars do you want?</div>
      <GenericSelect length={5} />
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

export default StarRating;
