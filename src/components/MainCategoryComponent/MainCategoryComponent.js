import "./MainCategoryComponent.css";
import GenericInput from "../../common/GenericInput/GenericInput.js";
import StarBlack from "../../assets/starIcon.png";
import smile1 from "../../assets/smile1.png";
import smile2 from "../../assets/smile2.png";
import smile3 from "../../assets/smile3.png";
import smile4 from "../../assets/smile4.png";
import smile5 from "../../assets/smile5.png";

const smileArray = [
  { img: smile1 },
  { img: smile2 },
  { img: smile3 },
  { img: smile4 },
  { img: smile5 },
];

const MainCategoryComponent = ({ name }) => {
  if (name === "Textarea") return <GenericInput className={"type6"} />;
  if (name === "Single line input") return <GenericInput className={"type7"} />;
  if (name === "Numeric rating")
    return (
      <div className="boxContainer">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((e) => (
          <div className="box">{e}</div>
        ))}
      </div>
    );
  if (name === "Star rating")
    return (
      <div className="starContainer">
        {Array.from({ length: 5 }, (_, index) => index + 1).map(() => (
          <img src={StarBlack} className="starIcon" alt="none" />
        ))}
      </div>
    );
  if (name === "Smiley rating")
    return (
      <div className="starContainer">
        {smileArray.map((e) => (
          <img src={e.img} className="smileIcon" alt="none" />
        ))}
      </div>
    );
};

export default MainCategoryComponent;
