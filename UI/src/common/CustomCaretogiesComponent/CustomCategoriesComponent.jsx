import { useState } from "react";

const CustomCategoriesComponent = ({ option1, option2, option3 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-15 w-112.5 flex items-center gap-5">
      {[option1, option2, option3].map((option, index) => {
        const isSelected = selectedOption === option;

        return (
          <div
            key={index}
            onClick={() => handleSelect(option)}
            className={`
              h-8.25 w-28.75
              flex items-center justify-center
              rounded-md border
              cursor-pointer
              transition-colors duration-200
              ${
                isSelected
                  ? "bg-gray-500 text-white border-gray-500"
                  : "border-gray-400 text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default CustomCategoriesComponent;
