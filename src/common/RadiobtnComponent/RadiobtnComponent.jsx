import { useState } from "react";

const RadiobtnComponent = ({ option1, option2, option3 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col">
      {[option1, option2, option3].map((option, index) => (
        <div
          key={index}
          onClick={() => handleSelect(option)}
          className="flex items-center cursor-pointer mb-2.5 group"
        >
          {/* Outer Circle */}
          <div
            className={`
              w-5 h-5 border-2 rounded-full mr-2.5
              flex items-center justify-center
              transition-colors duration-200
              ${
                selectedOption === option
                  ? "border-blue-500"
                  : "border-gray-300"
              }
            `}
          >
            {/* Inner Circle */}
            <div
              className={`
                w-2.5 h-2.5 bg-blue-500 rounded-full
                ${
                  selectedOption === option ? "block" : "hidden"
                }
              `}
            />
          </div>

          {/* Label */}
          <span className="text-base text-gray-800">
            {option}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RadiobtnComponent;
