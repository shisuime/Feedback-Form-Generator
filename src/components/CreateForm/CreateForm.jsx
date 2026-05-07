import Plus from "../../assets/Plus.png";
import useAppStore from "../../store/appStore";


const CreateForm = () => {
  const modalStateHandler = useAppStore((state) => state.modalStateHandler);

  return (
    <div
      onClick={modalStateHandler}
      className="h-94.75 w-76.5 flex flex-col items-center justify-center rounded-[10px] shadow-lg bg-white cursor-pointer"
    >
      <img
        src={Plus}
        alt="none"
        className="h-22.75 w-22.75 mt-17.5"
      />
      <h1 className="text-xl font-semibold mt-4">
        New Form
      </h1>
    </div>
  );
};

export default CreateForm;
