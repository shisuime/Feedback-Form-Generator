import useAppStore from "../../store/appStore";
import textArea from "../../assets/textArea.png";
import strictPlus from "../../assets/strictPlus.png";
import star from "../../assets/star.png";
import smile from "../../assets/smile.png";
import singleLine from "../../assets/singleLine.png";
import radioButton from "../../assets/radioButtons.png";
import numericRating from "../../assets/numericRating.png";
import categories from "../../assets/categories.png";
import ToggleableInput from "../../common/ToggleableInput/ToggleableInput";

const CategoryFields = ({ fieldConfigStateHandler }) => {
  const setFieldConfigType = useAppStore((state) => state.setFieldConfigType);

  // Fix: Only accept and pass the string name to the store
  const plusButtonHandler = (name) => {
    fieldConfigStateHandler();
    setFieldConfigType(name); 
  };

  // Fix: Remove the `component` property entirely from this tracking configuration array
  const categoriesArray = [
    { name: "Textarea", object: textArea },
    { name: "Numeric rating", object: numericRating },
    { name: "Star rating", object: star },
    { name: "Smiley rating", object: smile },
    { name: "Single line input", object: singleLine },
    { name: "Radio button", object: radioButton },
    { name: "Categories", object: categories },
  ];

  return (
    <div className="flex flex-col space-y-8 relative z-10">
      {/* Title Section */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">Add Fields</h3>
        <p className="text-xs text-slate-400 mt-0.5">Click plus icon to append a block onto your canvas view.</p>
      </div>

      {/* Row Element Categories Listing Field Wraps */}
      <div className="flex flex-col border border-slate-100 rounded-xl bg-slate-50/50 p-2 divide-y divide-slate-100/70">
        {categoriesArray.map((e) => (
          <div
            key={e.name}
            className="flex justify-between items-center p-3 hover:bg-white rounded-lg transition duration-150 group"
          >
            <div className="flex items-center gap-3.5">
              <img
                src={e.object}
                alt={e.name}
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                {e.name}
              </span>
            </div>

            <img
              src={strictPlus}
              alt="plus"
              onClick={() => plusButtonHandler(e.name)} // Fix: only pass string
              className="w-5 h-5 cursor-pointer opacity-40 hover:opacity-100 hover:scale-115 transition-all duration-150"
            />
          </div>
        ))}
      </div>

      {/* System Logic Display Parameter Section Blocks Layout */}
      <div className="pt-4 border-t border-slate-100 flex flex-col gap-4 w-full">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Visibility Rules</h4>
        
        <div className="space-y-3">
          <ToggleableInput
            placeholder="http://"
            type="type2"
            initialState={false}
            text="Show based on URL conditions"
          />

          <ToggleableInput
            placeholder="MM / DD / YY"
            type="type3"
            initialState={false}
            text="Show at specific dates"
            labelvalue="Start Date"
            labelClassname="labelType1"
          />

          <ToggleableInput
            placeholder="hh : mm : aa"
            type="type3"
            initialState={false}
            text="Show at specific time"
            labelvalue="Start Time"
            labelClassname="labelType1"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFields;