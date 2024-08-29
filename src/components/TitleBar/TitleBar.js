import TitleIcon from "../../assets/Pasted image.png";
import "./TitleBar.css";
import useAppStore from "../../store/appStore";

const TitleBar = () => {
  const { saveAndpublishBtnState } = useAppStore((state) => ({
    saveAndpublishBtnState: state.saveAndpublishBtnState,
  }));
  return (
    <div className="titleBarContainer">
      <div className="imageAndTextContainer">
        <img src={TitleIcon} className="TitleBarIcon" alt="none" />
        <h1>USER FEEDBACK</h1>{" "}
      </div>
      {saveAndpublishBtnState && (
        <div className="buttonContainer">
          <button className="saveButton">SAVE</button>
          <button className="publishButton">PUBLISH</button>
        </div>
      )}
    </div>
  );
};

export default TitleBar;
