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
import TextArea from "../TextArea/TextArea";
import NumericRating from "../NumericRating/NumericRating";
import StarRating from "../StartRating/StarRating";
import SmileRating from "../SmileRating/SmileRating";
import RadioButton from "../RadioButton/RadioButton";

import ToggleableInput from "../../common/ToggleableInput/ToggleableInput.js";

const categoriesArray = [
  {
    name: "Textarea",
    object: textArea,
    height: "16.03px",
    width: "20.25px",
    component: <TextArea />,
  },
  {
    name: "Numeric rating",
    object: numericRating,
    height: "9px",
    width: "32.9px",
    component: <NumericRating />,
  },
  {
    name: "Star rating",
    object: star,
    height: "17.81px",
    width: "18.75px",
    component: <StarRating />,
  },
  {
    name: "Smiley rating",
    object: smile,
    height: "18.75px",
    width: "18.75px",
    component: <SmileRating />,
  },
  {
    name: "Single line input",
    object: singleLine,
    height: "10.07px",
    width: "22.5px",
    component: <TextArea />,
  },
  {
    name: "Radio button",
    object: radioButton,
    height: "20.25px",
    width: "18.56px",
    component: <RadioButton />,
  },
  {
    name: "Categories",
    object: categories,
    height: "20.25px",
    width: "22.71px",
    component: <RadioButton />,
  },
];

const CategoryFields = () => {
  const { fieldConfigStateHandler, setFieldConfigType } = useAppStore(
    (state) => ({
      fieldConfigStateHandler: state.fieldConfigStateHandler,
      setFieldConfigType: state.setFieldConfigType,
    })
  );

  const plusButtonHandler = (name, component) => {
    fieldConfigStateHandler();
    setFieldConfigType(name, component);
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
              onClick={() => plusButtonHandler(e.name, e.component)}
            />
          </div>
        ))}
      </div>
      <div className="isVisibleLogic">
        <div className="conditionContainer">
          <ToggleableInput
            placeholder={"http://"}
            type={"type2"}
            initialState={false}
            text={"Show based on URL conditions"}
          />
        </div>
        <div className="conditionContainer">
          <ToggleableInput
            placeholder={"MM / DD / YY"}
            type={"type3"}
            initialState={false}
            text={"Show at specific dates"}
            labelvalue={"Start Date"}
            labelClassname={"labelType1"}
          />
        </div>
        <div className="conditionContainer">
          <ToggleableInput
            placeholder={"hh : mm : aa"}
            type={"type3"}
            initialState={false}
            text={"Show at specific time"}
            labelvalue={"Start Time"}
            labelClassname={"labelType1"}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFields;
