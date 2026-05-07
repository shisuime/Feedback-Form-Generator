import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import editIconBlack from "../../assets/editIconBlack.png";
import trashBlack from "../../assets/trashBlack.png";
import MainCategoryComponent from "../MainCategoryComponent/MainCategoryComponent";

const TestComponent = ({ data, id, deleteFunc }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (!data) return null;

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteFunc(id);
  };

  const preventDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-120 rounded-md shadow-lg flex flex-col justify-between items-center cursor-grab bg-white"
    >
      {/* Top Comment Text */}
      <div className="w-full pl-5 h-7.5 flex items-center text-sm text-gray-600">
        comment here
      </div>

      {/* Main Content */}
      <MainCategoryComponent name={data.name} />

      {/* Action Buttons */}
      <div className="h-10 w-112.5 flex justify-end items-center gap-8">
        <img
          src={editIconBlack}
          alt="edit"
          className="h-4.5 w-4.5 cursor-pointer hover:scale-110 transition-transform duration-200"
        />

        <img
          src={trashBlack}
          alt="delete"
          onClick={handleDeleteClick}
          onPointerDown={preventDrag}
          className="h-4.5 w-3.5 cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>
  );
};

export default TestComponent;
