import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Rating } from "@mui/material"; // Or use your own custom icon stars if preferred

const TestComponent = ({ id, element, deleteFunc }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  // 🛠️ Dynamic Sub-Renderer based on saved element types
  const renderLiveControl = () => {
    switch (element.type) {
      case "Textarea":
        return (
          <textarea
            readOnly
            disabled
            placeholder="User response text area..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 h-20 resize-none text-slate-400 focus:outline-none"
          />
        );

      case "Single line input":
        return (
          <input
            type="text"
            readOnly
            disabled
            placeholder="User response text line..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-400 focus:outline-none"
          />
        );

      // 💡 Wrapped in curly braces to create an independent block scope
      case "Numeric rating": {
        const boxCount = element.boxCount || 10;
        return (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {Array.from({ length: boxCount }).map((_, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-400 select-none"
              >
                {idx + 1}
              </div>
            ))}
          </div>
        );
      }

      // 💡 Wrapped in curly braces
      case "Star rating":
        return (
          <div className="flex items-center gap-1 mt-1 text-amber-400">
            <Rating name="read-only-stars" value={0} max={element.starCount || 5} disabled readOnly size="small" />
          </div>
        );

      // 💡 Wrapped in curly braces
      case "Smiley rating": {
        const smileyCount = element.smileyCount || 5;
        return (
          <div className="flex items-center gap-2 mt-1 text-lg opacity-40 grayscale select-none">
            {Array.from({ length: smileyCount }).map((_, idx) => (
              <span key={idx}>😊</span>
            ))}
          </div>
        );
      }

      // 💡 Wrapped in curly braces
      case "Radio button":
      case "Categories": {
        const choices = element.options || ["Option 1", "Option 2"];
        return (
          <div className="flex flex-col gap-2 mt-1">
            {choices.map((option, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                <input type="radio" disabled className="w-3.5 h-3.5 border-slate-300 text-blue-600 focus:ring-transparent" />
                <span>{option || `Unnamed Option ${idx + 1}`}</span>
              </div>
            ))}
          </div>
        );
      }

      default:
        return <div className="text-xs text-slate-400 italic">Unknown Input Component Layout type.</div>
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-colors duration-150 flex flex-col gap-2 text-left"
    >
      {/* Field Component Label Header & Required Status Badge Indicators */}
      <div className="flex items-start justify-between gap-4">
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing flex-1 select-none">
          <label className="text-xs font-bold text-slate-700 tracking-wide flex items-center gap-1">
            {element.label || "Untitled Field Question"}
            {element.isRequired && <span className="text-rose-500 text-sm leading-none">*</span>}
          </label>
        </div>

        {/* Delete Handle Button Component Trigger */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Stop DnD engine capturing clicks
            deleteFunc();
          }}
          className="text-slate-300 hover:text-rose-500 p-1 rounded-lg hover:bg-rose-50 transition-colors"
          title="Remove field"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Embedded Input Controller Display Render Node */}
      <div className="w-full">
        {renderLiveControl()}
      </div>

      {/* Render Error Hint Mock Preview placeholder */}
      {element.isRequired && element.errorMessage && (
        <span className="text-[10px] text-rose-500 font-medium mt-0.5">
          ⚠️ {element.errorMessage}
        </span>
      )}
    </div>
  );
};

export default TestComponent;