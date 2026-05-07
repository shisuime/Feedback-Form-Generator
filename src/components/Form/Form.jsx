import back from "../../assets/back.png";
import edit from "../../assets/edit.png";
import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";
import TestComponent from "../TestComponent/TestComponent";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Form = () => {
  const navigate = useNavigate();

  // Stable selectors (one per line)
  const formName = useAppStore((state) => state.formName);
  const modalStateHandler = useAppStore((state) => state.modalStateHandler);
  const setSaveAndpublishBtnState = useAppStore((state) => state.setSaveAndpublishBtnState);
  const formElements = useAppStore((state) => state.formElements);
  const setFormElements = useAppStore((state) => state.setFormElements);
  const deleteField = useAppStore((state) => state.deleteField);

  const backButtonHandler = () => {
    navigate("/");
    setSaveAndpublishBtnState(false);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = formElements.findIndex((e) => e.id === active.id);
    const newIndex = formElements.findIndex((e) => e.id === over.id);
    
    // Update the store directly
    setFormElements(arrayMove(formElements, oldIndex, newIndex));
  };

  return (
    <div className="h-188 w-125 ml-87.5 rounded-md bg-white shadow-lg flex flex-col">
      {/* Header */}
      <div className="h-18.5 bg-[#5578f4] flex items-center gap-4 px-8 rounded-t-md">
        <img
          src={back}
          alt="back"
          onClick={backButtonHandler}
          className="h-5 w-[12.35px] cursor-pointer hover:opacity-80 transition"
        />
        <div className="text-white font-bold text-2xl">{formName}</div>
        <img
          src={edit}
          alt="edit"
          onClick={modalStateHandler}
          className="h-4.5 w-4.5 cursor-pointer hover:opacity-80 transition"
        />
      </div>

      {/* Fields Area */}
      <div className="flex-1 flex flex-col items-center gap-5 pt-4 pb-4 overflow-y-auto scrollbar-hide">
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <SortableContext items={formElements} strategy={verticalListSortingStrategy}>
            {formElements.map((e) => (
              <TestComponent
                key={e.id}
                id={e.id}
                data={e.data}
                deleteFunc={() => deleteField(e.id)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Form;