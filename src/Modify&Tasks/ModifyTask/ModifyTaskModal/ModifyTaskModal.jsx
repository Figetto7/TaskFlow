import style from "./ModifyTaskModal.module.css";
import Modal from "react-modal";
import NewTaskForm from "../../AddTask/NewTaskForm/NewTaskForm";

export default function ModifyTaskModal({ task, onClose, onSave }) {
  return (
    <Modal isOpen={true} onRequestClose={onClose} shouldCloseOnOverlayClick={true} ariaHideApp={false} className={style.modalContent} overlayClassName={style.modalOverlay}>
      <div  className={style.modalFormContainer}> 
        <h2>WORKING</h2>
      </div>
      
    </Modal>
  )
}