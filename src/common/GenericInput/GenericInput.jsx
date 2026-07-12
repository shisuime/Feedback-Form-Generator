import React from "react";

const GenericInput = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  label,
  variant = "outlined", // 'outlined', 'underlined', or custom keys
  className = "",
  labelClassName = "",
  disabled = false,
  error = "",
  ...props // Catch rest like name, id, required, etc.
}) => {
  
  // Base structural classes for the input
  const baseInputStyles = "w-full outline-none transition-all duration-200 text-base text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed";

  // Pre-defined variants that look modern and polished
  const variantStyles = {
    outlined: `border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
      error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""
    }`,
    underlined: `border-b-2 border-gray-200 px-1 py-2 focus:border-blue-500 ${
      error ? "border-red-500 focus:border-red-500" : ""
    }`,
    // Preserving your legacy shapes with cleaner baselines
    type1: "border-b border-gray-300 h-[36px] px-2 focus:border-blue-500",
    type2: "border-b-2 border-neutral-700 h-[36px] px-2 focus:border-neutral-900",
    type3: "border border-gray-300 rounded-md h-[56px] px-4 focus:border-blue-500",
    type4: "border-b-2 border-[#00c1f6] h-[36px] px-1",
    type6: "border border-gray-300 rounded-md h-[106px] w-full max-w-[445px] p-4 focus:border-blue-500",
    type7: "border border-gray-300 rounded-md h-[40px] w-full max-w-[445px] px-3 focus:border-blue-500",
  };

  // Determine if the label should float over the border or sit naturally above
  const isOutlined = variant === "outlined" || variant === "type3" || variant === "type6" || variant === "type7";
  
  const labelBase = "text-sm font-medium transition-colors duration-200";
  const labelPlacement = isOutlined
    ? "absolute -top-2.5 left-3 bg-white px-1 z-10 scale-95 origin-left"
    : "mb-1.5 block"; // Underlined variants look much better with labels stacked naturally above
    
  const labelColor = error 
    ? "text-red-600" 
    : "text-gray-600 group-focus-within:text-blue-600";

  return (
    <div className="relative flex flex-col w-full group">
      {/* Label */}
      {label && (
        <label className={`${labelBase} ${labelPlacement} ${labelColor} ${labelClassName}`}>
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
        className={`${baseInputStyles} ${variantStyles[variant] || variantStyles[props.className] || ""} ${className}`}
        {...props}
      />

      {/* Error Message */}
      {error && (
        <span className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1 animate-fadeIn">
          {error}
        </span>
      )}
    </div>
  );
};

export default GenericInput;