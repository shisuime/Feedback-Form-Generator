import "./TextArea.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.js";

const TextArea = () => {
  return (
    <div className="textAreaContainer">
      <GenericInput
        placeholder="Would you like to add a comment?"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
      />
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

export default TextArea;
