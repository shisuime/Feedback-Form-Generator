import "./FormGeneration.css";
import Form from "../Form/Form";
import CategoryFields from "../CategoryFields/CategoryFields";
import Modal from "../../common/Modal/Modal.js";
import EditFeedbackTitlePopUp from "../EditFeedbackTitlePopUp/EditFeedbackTitlePopUp.js";
import FieldConfig from "../FieldConfig/FieldConfig.js";

const FormGeneration = () => {
  return (
    <>
      <Modal>
        <EditFeedbackTitlePopUp />
      </Modal>
      <div className="formGenerationContainer">
        <div className="canvus">
          <Form />
        </div>
        <div className="toolsContainer">
          <FieldConfig />
          <CategoryFields />
        </div>
      </div>
    </>
  );
};

export default FormGeneration;
