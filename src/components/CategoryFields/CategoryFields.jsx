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
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput";


const CategoryFields = () => {
const fieldConfigStateHandler = useAppStore((state) => state.fieldConfigStateHandler);
const setFieldConfigType = useAppStore((state) => state.setFieldConfigType);
const dataFromFields = useAppStore((state) => state.dataFromFields);
const setdataFromFields = useAppStore((state) => state.setdataFromFields);

  const plusButtonHandler = (name, component) => {
    fieldConfigStateHandler();
    setFieldConfigType(name, component);
  };
  // done styling
  const categoriesArray = [
    {
      name: "Textarea",
      object: textArea,
      component: (
        <TextArea value={dataFromFields} setValue={setdataFromFields} />   // done styling
      ),
    },
    {
      name: "Numeric rating",
      object: numericRating,
      component: <NumericRating />,   // done styling
    },
    {
      name: "Star rating",
      object: star,
      component: <StarRating />,  // done styling
    },
    {
      name: "Smiley rating",
      object: smile,
      component: <SmileRating />,  // done styling
    },
    {
      name: "Single line input",
      object: singleLine,
      component: <TextArea />,   // done styling
    },
    {
      name: "Radio button",
      object: radioButton,
      component: <RadioButton />, // done styling
    },
    {
      name: "Categories",
      object: categories,
      component: <RadioButton />, // done styling
    },
  ];

  return (
    <div className="flex flex-col px-10 gap-10 h-full relative z-10">

      {/* Header */}
      <div className="text-2xl font-semibold pt-5">
        Add Fields
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-8">
        {categoriesArray.map((e) => (
          <div
            key={e.name}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={e.object}
                alt={e.name}
                className="w-[22.25px] h-[22.25px]"
              />
              <div className="text-sm font-medium">
                {e.name}
              </div>
            </div>

            <img
              src={strictPlus}
              alt="plus"
              onClick={() =>
                plusButtonHandler(e.name, e.component)
              }
              className="w-[22.25px] h-[22.25px] cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Visibility Logic */}
      <div className="flex flex-col gap-5 w-full">

        <ToggleableInput
          placeholder="http://"
          type="type2"
          initialState={false}
          text="Show based on URL conditions"
        />

        <ToggleableInput
          placeholder="MM / DD / YY"
          type="type3"
          initialState={false}
          text="Show at specific dates"
          labelvalue="Start Date"
          labelClassname="labelType1"
        />

        <ToggleableInput
          placeholder="hh : mm : aa"
          type="type3"
          initialState={false}
          text="Show at specific time"
          labelvalue="Start Time"
          labelClassname="labelType1"
        />
      </div>
    </div>
  );
};

export default CategoryFields;
