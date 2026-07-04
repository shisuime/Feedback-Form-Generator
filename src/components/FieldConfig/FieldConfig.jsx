import backBlack from "../../assets/backBlack.png";
import useAppStore from "../../store/appStore";

const FieldConfig = ({ fieldConfigState, fieldConfigStateHandler }) => {
  // const fieldConfigState = useAppStore((state) => state.fieldConfigState);
  // const fieldConfigStateHandler = useAppStore((state) => state.fieldConfigStateHandler);
  const fieldConfigType = useAppStore((state) => state.fieldConfigType);
  const setFieldData = useAppStore((state) => state.setFieldData);
  const dataFromFields = useAppStore((state) => state.dataFromFields);

  

  const generateRandomId = (length = 8) => {
    return "id_" + Math.random().toString(36).replace(/^.{2}/, "").slice(0, length);
  };

  const saveBtnHandler = (name, label) => {
    const ranId = generateRandomId();
    setFieldData(ranId, name, label);
    fieldConfigStateHandler();
  };
  if (!fieldConfigState) return null;
  return (
    
      <div className="absolute inset-0 bg-white z-30 flex flex-col justify-between shadow-xl animate-in slide-in-from-right duration-200">

        {/* Content Scroller Layout */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* Header navigation bar layout */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <img
              src={backBlack}
              alt="back"
              onClick={fieldConfigStateHandler}
              className="cursor-pointer p-1 hover:bg-slate-100 rounded-full transition duration-150"
            />
            <span className="font-semibold text-sm text-slate-700">
              Back to Fields Drawer
            </span>
          </div>

          {/* Form Generation Component Injector Section Container */}
          <div className="bg-slate-50/60 p-4 rounded-lg border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Field Options</h4>
            {fieldConfigType?.component}
          </div>
        </div>

        {/* Persistent Sticky Bottom Action Toolbar Panel Control Blocks */}
        <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={fieldConfigStateHandler}
            className="h-10 px-4 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition shadow-xs cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => saveBtnHandler(fieldConfigType?.name, dataFromFields?.inputData)}
            className="h-10 px-5 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition shadow-sm cursor-pointer"
          >
            Save Field
          </button>
        </div>
      </div>
    
  );
};

export default FieldConfig;