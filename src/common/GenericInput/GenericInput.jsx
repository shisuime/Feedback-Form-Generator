const GenericInput = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  label,
  className = "",
  labelClassname = "",
  disabled = false,
  error = "",
}) => {
  const baseInput =
    "outline-none text-base px-2 py-1";

  const types = {
    type1:
      "border-none border-b border-gray-300 h-[30px] pl-2",
    type2:
      "border-none border-b-[2.5px] border-[#4a4a4a] h-[26px] pl-2",
    type3:
      "border border-gray-400 rounded-md h-[56px] pl-5",
    type4:
      "border-none border-b-2 border-[#00c1f6] h-[26px]",
    type5:
      "border-b border-gray-300 w-[100px] h-[10px]",
    type6:
      "border border-gray-400 rounded-md h-[106px] w-[445px]",
    type7:
      "border border-gray-400 rounded-md h-[30px] w-[445px]",
  };

  const errorStyle = error
    ? "border-b border-red-600"
    : "";

  return (
    <div className="relative flex flex-col">
      
      {/* Label */}
      {label && (
        <label
          className={`absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-gray-700 z-10 ${
            error ? "text-red-600" : ""
          } ${labelClassname}`}
        >
          {label}
        </label>
      )}

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseInput} ${types[className] || ""} ${errorStyle}`}
      />

      {/* Error */}
      {error && (
        <span className="text-red-600 text-xs mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default GenericInput;
