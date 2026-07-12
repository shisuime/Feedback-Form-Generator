import useAppStore from "../../store/appStore";
import TextArea from "../TextArea/TextArea";
import NumericRating from "../NumericRating/NumericRating";
import StarRating from "../StartRating/StarRating";
import SmileRating from "../SmileRating/SmileRating";
import RadioButton from "../RadioButton/RadioButton";

const CONFIG_MAPPING = {
  "Textarea": TextArea,
  "Single line input": TextArea,
  "Numeric rating": NumericRating,
  "Star rating": StarRating,
  "Smiley rating": SmileRating,
  "Radio button": RadioButton,
  "Categories": RadioButton,
};

const FieldConfig = ({ fieldConfigStateHandler }) => {
  const fieldConfigType = useAppStore((state) => state.fieldConfigType);
  const forms = useAppStore((state) => state.forms);
  
  // Zustand Store Actions
  const dataFromFields = useAppStore((state) => state.dataFromFields); // Staged values
  const initialiseForm = useAppStore((state) => state.initialiseForm);
  const addFieldToForm = useAppStore((state) => state.addFieldToForm);

  if (!fieldConfigType) return null;

  const ActiveFormConfiguration = CONFIG_MAPPING[fieldConfigType];
  const activeFormId = Object.keys(forms)[0] || "default-form";

  const handleGenericSave = () => {
    // 1. Initialize form safety layout check
    if (!forms[activeFormId]) {
      initialiseForm(activeFormId, "My Custom Feedback Form");
    }

    // 2. Map data from global field staging slice & add type meta
    const fieldDataPayload = {
      id: `field_${Date.now()}`,
      type: fieldConfigType,
      ...(dataFromFields || {}),
    };

    // 3. Save into our target active schema array
    addFieldToForm(activeFormId, fieldDataPayload);

    // 4. Return to the side categories selection view panel
    fieldConfigStateHandler();
  };

  return (
    <div className="p-5 flex flex-col gap-5 bg-white border-b border-slate-100">
      {/* Header Panel with Close Action */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={fieldConfigStateHandler}
          className="px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition"
        >
          back
        </button>
        <div>
          <h4 className="text-sm font-bold text-slate-800">Field Options</h4>
          <p className="text-xs text-slate-400">Editing {fieldConfigType} settings</p>
        </div>
      </div>

      {/* Dynamic Content Rendering Wrapper */}
      <div className="mt-2 w-full">
        {ActiveFormConfiguration ? (
          <ActiveFormConfiguration 
            formId={activeFormId} 
            onClose={fieldConfigStateHandler} 
            fieldConfigType={fieldConfigType}
          />
        ) : (
          <div className="text-xs text-slate-400 italic">Configuration view unavailable.</div>
        )}
      </div>

      {/* Shared Functional Interface Action Buttons */}
      <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 mt-4">
        <button
          type="button"
          onClick={fieldConfigStateHandler}
          className="px-4 py-2 text-xs font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 rounded-xl transition"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleGenericSave}
          className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm rounded-xl transition"
        >
          Save Field
        </button>
      </div>
    </div>
  );
};

export default FieldConfig;