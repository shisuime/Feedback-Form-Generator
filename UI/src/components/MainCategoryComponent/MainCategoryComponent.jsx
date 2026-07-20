import GenericInput from "../../common/GenericInput/GenericInput.jsx";
import StarBlack from "../../assets/starIcon.png";
import smile1 from "../../assets/smile1.png";
import smile2 from "../../assets/smile2.png";
import smile3 from "../../assets/smile3.png";
import smile4 from "../../assets/smile4.png";
import smile5 from "../../assets/smile5.png";
import RadiobtnComponent from "../../common/RadiobtnComponent/RadiobtnComponent.jsx";
import CustomCategoriesComponent from "../../common/CustomCaretogiesComponent/CustomCategoriesComponent.jsx";

const smileArray = [
  { img: smile1 },
  { img: smile2 },
  { img: smile3 },
  { img: smile4 },
  { img: smile5 },
];

const MainCategoryComponent = ({ name }) => {
  if (name === "Textarea")
    return (
      <GenericInput
        className="type6"
        disabled
      />
    );

  if (name === "Single line input")
    return (
      <GenericInput
        className="type7"
        disabled
      />
    );

  if (name === "Numeric rating")
    return (
      <div className="w-112.5 flex">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((e) => (
          <div
            key={e}
            className="h-8.75 w-11.25 flex items-center justify-center border border-gray-300 rounded-sm text-sm"
          >
            {e}
          </div>
        ))}
      </div>
    );

  if (name === "Star rating")
    return (
      <div className="w-112.5 flex gap-1.5">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src={StarBlack}
            alt="star"
            className="h-7 w-6.5"
          />
        ))}
      </div>
    );

  if (name === "Smiley rating")
    return (
      <div className="w-112.5 flex gap-2">
        {smileArray.map((e, index) => (
          <img
            key={index}
            src={e.img}
            alt="smile"
            className="h-10 w-10"
          />
        ))}
      </div>
    );

  if (name === "Radio button")
    return (
      <div className="flex flex-col w-112.5">
        <RadiobtnComponent
          option1="hi"
          option2="hi2"
          option3="hi3"
        />
      </div>
    );

  if (name === "Categories")
    return (
      <div className="w-112.5">
        <CustomCategoriesComponent
          option1="hdwai"
          option2="hdwadi2"
          option3="hdwadi3"
        />
      </div>
    );

  return null;
};

export default MainCategoryComponent;
