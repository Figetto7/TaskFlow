import React from "react";
import TaskSummary from "../TaskSummary/TaskSummary";
import HeaderHome from "../Header/HeaderHome";
import FiltriTask from "../FiltriTask/FiltriTask"
import Task from "../Task/Task"
import { getCurrentDate, getExpiredText } from "../Task/utils";
import { useTaskContext } from "../TaskContext";
import styles from "./Home.module.css";

export default function Home() {
  const { tasks } = useTaskContext();
  return (
    
    <>
      <HeaderHome />
      <div className={styles.taskSummary}>
      <TaskSummary title="Task Totali" number={tasks.length} flag="T"/>
      <TaskSummary title="Completati" number={tasks.filter(task => task.isCompleted).length} flag="C" />
      <TaskSummary title="In scadenza" number={tasks.filter(task => !task.isCompleted && getExpiredText(task.deadline, getCurrentDate())).length} flag="S"/>
      </div>
      <FiltriTask />
      {tasks.map( task => <Task key={task.id} taskId={task.id}></Task>)}
    </>
  )
}
    