import styles from "./Task.module.css";
import { useTaskContext } from "../../Context/TaskContext";
import { getCurrentDate, getPriorityColor, getExpiredText, getTaskStyle, formatDate } from "../../../utils";
import ModifyTaskModal from "../../Modify&Tasks/ModifyTask/ModifyTaskModal/ModifyTaskModal";
import React, { useState } from "react";

export default function Task({taskId, use}) {
  const [showModal, setShowModal] = useState(false);
  
  const handleClick = (e) => {
    if (use === "modify") {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const {tasks, toggleTaskCompletion} = useTaskContext();
  const task = tasks.find(t => t.id === taskId);

  return (
    <>
      <div className={getTaskStyle(task.deadline, task.isCompleted, use)} key={task.id} onClick={handleClick}> 
        <div className={styles.checkboxContainer}>
          {use === "home" && <input type="checkbox" className={styles.checkbox} onClick={()=>{ toggleTaskCompletion(task.id)}} defaultChecked={task.isCompleted} />}
        </div>
        
        <div className={styles.mainContent}>
          <div className={styles.titleSection}>
            <h2 className={task.isCompleted ? styles.completedTaskTitle : styles.title}>{task.title}</h2>
            <span className={getPriorityColor(task.priority)}>{task.priority}</span>
            { task.isCompleted === false && getExpiredText(task.deadline, getCurrentDate()) && (<span className={styles.expired}> ⏱︎ Scaduto</span>)}
          </div>
          <p className={styles.description}>{task.description}</p>
        </div>
        
        <div className={styles.detailsContainer}>
          <p className={styles.detail}>Categoria: {task.category}</p>
          <p className={styles.detail}>Scadenza: {formatDate(task.deadline)}</p>
          <p className={styles.detail}>Creato: {getCurrentDate()}</p>
        </div>
      </div>
      {showModal && (
        <ModifyTaskModal 
          task={task} 
          onClose={handleCloseModal} 
          onSave={() => {}} 
        />
      )}
    </>
  );
}