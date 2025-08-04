import styles from "./Task.module.css";
import { useTaskContext } from "../TaskContext";
import { getCurrentDate, getPriorityColor, getExpiredText, getTaskStyle, formatDate } from "./utils";

export default function Task({taskId}) {
  const {tasks, toggleTaskCompletion} = useTaskContext();
  const task = tasks.find(t => t.id === taskId)
  return (
    <div className={getTaskStyle(task.deadline, task.isCompleted)} key={task.id}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} onClick={()=>{toggleTaskCompletion(task.id)}} defaultChecked={task.isCompleted} />
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
  )
}
