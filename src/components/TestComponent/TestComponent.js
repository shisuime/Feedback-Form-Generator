import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./TestComponent.css";
import editIconBlack from "../../assets/editIconBlack.png";
import trashBlack from "../../assets/trashBlack.png";
import MainCategoryComponent from "../MainCategoryComponent/MainCategoryComponent";
import { useEffect } from "react";

const TestComponent = ({ data, id, deleteFunc }) => {
  useEffect(() => {
    console.log("run");
  }, null);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (!data) {
    return null;
  }

  // This function will handle delete button clicks without interfering with drag events
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteFunc(id);
  };

  // Prevent drag initiation on the delete button
  const preventDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className="testComponentContainer"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="commentText">comment here</div>
      <MainCategoryComponent name={data.name} />
      <div className="formsButtonsContainer">
        <img src={editIconBlack} className="editIconBlack" alt="none" />
        <img
          src={trashBlack}
          className="trashIcon"
          alt="none"
          onClick={handleDeleteClick}
          onPointerDown={preventDrag} // Prevents drag when pressing the delete button
        />
      </div>
    </div>
  );
};

export default TestComponent;
