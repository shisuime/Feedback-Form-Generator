import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./TestComponent.css";

const TestComponent = ({ data, id }) => {
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
      {data}
    </div>
  );
};

export default TestComponent;
