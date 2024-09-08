import "./Form.css";
import back from "../../assets/back.png";
import edit from "../../assets/edit.png";
import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";
import TestComponent from "../TestComponent/TestComponent";
import { dummyData } from "../../dummyData/dummyData";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState, useEffect } from "react";

const Form = () => {
  const navigate = useNavigate();

  const {
    formName,
    modalStateHandler,
    setSaveAndpublishBtnState,
    fieldData,
    setFieldData,
  } = useAppStore((state) => ({
    formName: state.formName,
    modalStateHandler: state.modalStateHandler,
    setSaveAndpublishBtnState: state.setSaveAndpublishBtnState,
    fieldData: state.fieldData,
    setFieldData: state.setFieldData,
  }));

  const [formElements, setFormElements] = useState([]);

  useEffect(() => {
    if (fieldData.id && fieldData.data.name) {
      if (formElements.length === 7) {
        return;
      }
      setFormElements((prev) => [...prev, fieldData]);
    }
  }, [fieldData]);

  console.log(formElements, "checking the additional element");

  const backButtonHandler = () => {
    navigate("/");
    setSaveAndpublishBtnState(false);
  };

  const getElementId = (id) => formElements.findIndex((e) => e.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setFormElements((formElements) => {
      const originalPos = getElementId(active.id);
      const newPos = getElementId(over.id);

      return arrayMove(formElements, originalPos, newPos);
    });
  };

  return (
    <div className="formContainer">
      <div className="titleContainer">
        <img
          className="backIcon"
          src={back}
          alt="none"
          onClick={backButtonHandler}
        />
        <div className="formName">{formName}</div>
        <img
          className="editIcon"
          src={edit}
          alt="none"
          onClick={modalStateHandler}
        />
      </div>
      <div className="fields">
        {/* <div className="placeHolderText">Add Field</div>
         */}
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <SortableContext
            items={formElements}
            strategy={verticalListSortingStrategy}
          >
            {formElements?.map((e) => (
              <TestComponent data={e.data} key={e.id} id={e.id} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Form;
