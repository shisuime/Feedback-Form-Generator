import "./TextArea.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.js";
// import { useState } from "react";

const TextArea = ({ value, setValue }) => {
  console.log(value, "dwada");
  const handleInputChange = (e) => {
    console.log(e.target.value, "Before State Update"); // Log value before update
    setValue(e.target.value); // Trigger state update
    console.log(value, "After State Update"); // This might not immediately show the updated value due to React's async state update
  };
  return (
    <div className="textAreaContainer">
      <GenericInput
        placeholder="Would you like to add a comment?"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
        value={value.inputData}
        onChange={handleInputChange}
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
