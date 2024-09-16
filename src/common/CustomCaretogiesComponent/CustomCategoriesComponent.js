import "./CustomCategoriesComponent.css";
import { useState } from "react";

const CustomCategoriesComponent = ({ option1, option2, option3 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("clicked");
  };

  return (
    <div className="category-container">
      {[option1, option2, option3].map((option, index) => (
        <div
          key={index}
          className={
            selectedOption === option
              ? "category-button-Black"
              : "category-button"
          }
          onClick={() => handleSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default CustomCategoriesComponent;
