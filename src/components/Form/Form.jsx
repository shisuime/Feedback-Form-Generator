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
    
    setFormElements(arrayMove(formElements, oldIndex, newIndex));
  };

  return (
    // Max width and responsive margins simulate a clean floating tablet/form canvas
    <div className="w-full max-w-md h-[75vh] min-h-[500px] rounded-xl bg-white shadow-xl flex flex-col border border-slate-200/60 overflow-hidden">
      
      {/* Header */}
      <div className="h-16 bg-blue-600 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <img
            src={back}
            alt="back"
            onClick={backButtonHandler}
            className="h-4 w-auto cursor-pointer hover:scale-110 active:opacity-70 transition-transform duration-150"
          />
          <h2 className="text-white font-bold text-lg tracking-wide truncate max-w-[240px]">
            {formName || "Untitled Form"}
          </h2>
        </div>
        <img
          src={edit}
          alt="edit"
          onClick={modalStateHandler}
          className="h-4 w-4 cursor-pointer hover:scale-110 active:opacity-70 transition-transform duration-150 brightness-0 invert"
        />
      </div>

      {/* Fields Workspace Area */}
      <div className="flex-1 bg-slate-50/50 px-4 py-6 overflow-y-auto space-y-4">
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <SortableContext items={formElements} strategy={verticalListSortingStrategy}>
            {formElements.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-200 rounded-lg text-slate-400">
                <p className="text-sm">Your form workspace is empty.</p>
                <p className="text-xs mt-1 text-slate-400">Click elements in the tool panel to append fields.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {formElements.map((e) => (
                  <TestComponent
                    key={e.id}
                    id={e.id}
                    data={e.data}
                    deleteFunc={() => deleteField(e.id)}
                  />
                ))}
              </div>
            )}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Form;