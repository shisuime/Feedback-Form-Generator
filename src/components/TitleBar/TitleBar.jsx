import TitleIcon from "../../assets/Pasted image.png";
import useAppStore from "../../store/appStore";

const TitleBar = () => {
  // Pull the value directly from the state
  const saveAndpublishBtnState = useAppStore((state) => state.saveAndpublishBtnState);

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white flex items-center justify-between border-b border-slate-200/80 px-4 md:px-6 z-50">
      
      {/* Left Section */}
      <div className="flex items-center gap-3 h-16">
        <img
          src={TitleIcon}
          className="h-10 w-10 object-contain rounded-md"
          alt="App Logo"
        />
        <h1 className="text-lg font-bold tracking-wider text-slate-800 uppercase">
          User Feedback
        </h1>
      </div>

      {/* Right Section */}
      {saveAndpublishBtnState && (
        <div className="flex items-center gap-4">
          <button className="h-10 px-5 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 cursor-pointer">
            Save
          </button>
          <button className="h-10 px-5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 cursor-pointer">
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default TitleBar;