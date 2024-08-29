import "./GenericInput.css";

const GenericInput = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  label,
  className,
  labelClassname,
  disabled = false,
  error = "",
}) => {
  return (
    <div className={`input-container ${error ? "input-error" : ""}`}>
      {label && (
        <label className={labelClassname ? labelClassname : ""}>{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default GenericInput;
