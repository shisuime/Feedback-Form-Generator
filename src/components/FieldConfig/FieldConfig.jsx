import backBlack from "../../assets/backBlack.png";
import useAppStore from "../../store/appStore";

const FieldConfig = () => {
 // Pull each property individually for stable references
const fieldConfigState = useAppStore((state) => state.fieldConfigState);
const fieldConfigStateHandler = useAppStore((state) => state.fieldConfigStateHandler);
const fieldConfigType = useAppStore((state) => state.fieldConfigType);
const setFieldData = useAppStore((state) => state.setFieldData);
const dataFromFields = useAppStore((state) => state.dataFromFields);
// const addField = useAppStore((state) => state.addField); // You'll likely need this new action too

  if (!fieldConfigState) return null;

  const generateRandomId = (length = 8) => {
    return (
      "id_" +
      Math.random().toString(36).replace(/^.{2}/, "").slice(0, length)
    );
  };

  const saveBtnHandler = (name, label) => {
    const ranId = generateRandomId();
    setFieldData(ranId, name, label);
    fieldConfigStateHandler();
  };

  const cancelHandler = () => {
    fieldConfigStateHandler();
  };

  return (
    <div className="absolute top-0 right-0 h-full w-full bg-white shadow-[-4px_0_8px_rgba(0,0,0,0.1)] z-30 flex flex-col gap-8">

      {/* Header */}
      <div className="pt-3 pl-3 flex items-center gap-3">
        <img
          src={backBlack}
          alt="back"
          onClick={fieldConfigStateHandler}
          className="cursor-pointer"
        />
        <div className="font-medium text-gray-700">
          Back to Add Fields
        </div>
      </div>

      {/* Body */}
      <div className="pl-5 flex flex-col gap-3">
        {fieldConfigType?.component}
      </div>

      {/* Buttons */}
      <div className="mt-auto pl-5 pb-6 flex gap-4">
        <button
          onClick={() =>
            saveBtnHandler(
              fieldConfigType?.name,
              dataFromFields?.inputData
            )
          }
          className="h-10.5 w-20.5 bg-white rounded-md shadow-md font-semibold hover:shadow-lg transition"
        >
          SAVE
        </button>

        <button
          onClick={cancelHandler}
          className="h-10.5 w-20.5 bg-white rounded-md shadow-md font-semibold hover:shadow-lg transition"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default FieldConfig;
