import Plus from "../../assets/Plus.png";
import useAppStore from "../../store/appStore";

const CreateFormIconCard = () => {
  // Use the exact state handler from your store
  const modalStateHandler = useAppStore((state) => state.modalStateHandler);

  return (
    <div 
      onClick={modalStateHandler}
      className="h-96 w-72 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group shrink-0"
    >
      {/* Icon wrapper matching the smooth micro-interactions */}
      <div className="transform group-hover:scale-105 transition-transform duration-200">
        <img 
          src={Plus} 
          alt="Create Form Icon" 
          className="h-24 w-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
        />
      </div>

      {/* Styled exactly like the FormsPanel headings */}
      <span className="text-xl font-bold text-slate-900 tracking-tight mt-4 group-hover:text-blue-600 transition-colors duration-200">
        New Form
      </span>
    </div>
  );
};

export default CreateFormIconCard;