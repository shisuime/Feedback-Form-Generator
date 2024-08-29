import "./NumericRating.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import { Switch } from "@mui/material";

const NumericRating = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <GenericInput
        placeholder="Would you like to add a comment?"
        className={"type4"}
        label={"Label"}
        labelClassname={"labelType2"}
      />
      <div className="switchAndTextContainer">
        <Switch {...label} />
        <div>Required</div>
      </div>
    </>
  );
};

export default NumericRating;
