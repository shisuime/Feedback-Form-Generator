import "./CategoryFields.css";
import useAppStore from "../../store/appStore";
import textArea from "../../assets/textArea.png";
import strictPlus from "../../assets/strictPlus.png";
import star from "../../assets/star.png";
import smile from "../../assets/smile.png";
import singleLine from "../../assets/singleLine.png";
import radioButton from "../../assets/radioButtons.png";
import numericRating from "../../assets/numericRating.png";
import categories from "../../assets/categories.png";
import { Switch } from "@mui/material";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import { useState } from "react";

const categoriesArray = [
  {
    name: "Textarea",
    object: textArea,
    height: "16.03px",
    width: "20.25px",
  },
  {
    name: "Numeric rating",
    object: numericRating,
    height: "9px",
    width: "32.9px",
  },
  {
    name: "Star rating",
    object: star,
    height: "17.81px",
    width: "18.75px",
  },
  {
    name: "Smiley rating",
    object: smile,
    height: "18.75px",
    width: "18.75px",
  },
  {
    name: "Single line input",
    object: singleLine,
    height: "10.07px",
    width: "22.5px",
  },
  {
    name: "Radio button",
    object: radioButton,
    height: "20.25px",
    width: "18.56px",
  },
  {
    name: "Categories",
    object: categories,
    height: "20.25px",
    width: "22.71px",
  },
];

const CategoryFields = () => {
  const { fieldConfigStateHandler } = useAppStore((state) => ({
    fieldConfigStateHandler: state.fieldConfigStateHandler,
  }));

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [isUrlConditionsEnabled, setIsUrlConditionsEnabled] = useState(true);
  const [isDateConditionsEnabled, setIsDateConditionsEnabled] = useState(true);
  const [isTimeConditionsEnabled, setIsTimeConditionsEnabled] = useState(true);

  const handleUrlConditionsChange = (event) => {
    setIsUrlConditionsEnabled(event.target.checked);
  };

  const handleDateConditionsChange = (event) => {
    setIsDateConditionsEnabled(event.target.checked);
  };

  const handleTimeConditionsChange = (event) => {
    setIsTimeConditionsEnabled(event.target.checked);
  };

  return (
    <div className="categoryFieldsContainer">
      <div className="addFieldsText">Add Fields</div>
      <div className="categories">
        {categoriesArray.map((e) => (
          <div className="category-box-container" key={e.name}>
            <div className="nameAndIconContainer">
              <img
                src={e.object}
                style={{ height: "22.25px", width: "22.25px" }}
                alt={e.name}
              />
              <div>{e.name}</div>
            </div>
            <img
              className="strictPlus"
              src={strictPlus}
              alt={"plus"}
              onClick={fieldConfigStateHandler}
            />
          </div>
        ))}
      </div>
      <div className="isVisibleLogic">
        <div className="conditionContainer">
          <div className="textAndToggle">
            <div className="conditionText">Show based on URL conditions</div>
            <Switch
              {...label}
              checked={isUrlConditionsEnabled}
              onChange={handleUrlConditionsChange}
            />
          </div>
          <GenericInput
            placeholder="http://"
            className={"type2"}
            disabled={!isUrlConditionsEnabled}
          />
        </div>
        <div className="conditionContainer">
          <div className="textAndToggle">
            <div className="conditionText">Show specific dates</div>
            <Switch
              {...label}
              checked={isDateConditionsEnabled}
              onChange={handleDateConditionsChange}
            />
          </div>
          <GenericInput
            placeholder="MM/DD/YY"
            label={"Start Date"}
            labelClassname={"labelType1"}
            className={"type3"}
            disabled={!isDateConditionsEnabled}
          />
        </div>
        <div className="conditionContainer">
          <div className="textAndToggle">
            <div className="conditionText">Show specific time</div>
            <Switch
              {...label}
              checked={isTimeConditionsEnabled}
              onChange={handleTimeConditionsChange}
            />
          </div>
          <GenericInput
            placeholder="hh:mm aa"
            label={"Start Time"}
            labelClassname={"labelType1"}
            className={"type3"}
            disabled={!isTimeConditionsEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFields;
