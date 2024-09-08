import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./TestComponent.css";
import editIconBlack from "../../assets/editIconBlack.png";
import trashBlack from "../../assets//trashBlack.png";
import MainCategoryComponent from "../MainCategoryComponent/MainCategoryComponent";

const TestComponent = ({ data, id }) => {
  // console.log(data, id, "test component");
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (!data) {
    return null;
  }
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
        <img src={trashBlack} className="trashIcon" alt="none" />
      </div>
    </div>
  );
};

export default TestComponent;
