import { useState } from "react";
import "./RadiobtnComponent.css";

const RadiobtnComponent = ({ option1, option2, option3 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("clicked");
  };

  return (
    <div className="radio-container">
      {[option1, option2, option3].map((option, index) => (
        <div
          key={index}
          className="radio-button"
          onClick={() => handleSelect(option)}
        >
          <div
            className={`radio-circle ${
              selectedOption === option ? "selected" : ""
            }`}
          >
            <div className="radio-inner-circle" />
          </div>
          <span className="radio-label">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default RadiobtnComponent;
