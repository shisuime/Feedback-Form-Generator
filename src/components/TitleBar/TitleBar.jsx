import TitleIcon from "../../assets/Pasted image.png";
import useAppStore from "../../store/appStore";

const TitleBar = () => {
  // Pull the value directly from the state
const saveAndpublishBtnState = useAppStore((state) => state.saveAndpublishBtnState);

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white flex items-center justify-between shadow-md z-10">
      
      {/* Left Section */}
      <div className="flex items-center gap-2.5 h-16">
        <img
          src={TitleIcon}
          className="h-16 w-16"
          alt="none"
        />
        <h1 className="text-xl font-semibold">
          USER FEEDBACK
        </h1>
      </div>

      {/* Right Section */}
      {saveAndpublishBtnState && (
        <div className="flex gap-7.5 pr-2.5">
          <button className="h-10.5 w-20.5 bg-[#1eb5e3] text-white rounded-md font-extrabold shadow-lg">
            SAVE
          </button>
          <button className="h-10.5 w-20.5 bg-[#168300] text-white rounded-md font-extrabold shadow-lg">
            PUBLISH
          </button>
        </div>
      )}
    </div>
  );
};

export default TitleBar;
