import React from "react";
import TaskSummary from "../TaskSummary/TaskSummary";
import HeaderHome from "../Header/HeaderHome";
import FiltriTask from "../FiltriTask/FiltriTask"
import Task from "../Task/Task"
import { getCurrentDate, getExpiredText, getFilteredTasks } from "../../utils";
import { useTaskContext } from "../TaskContext";
import styles from "./Home.module.css";

export default function Home() {
  const { tasks } = useTaskContext();
  const [priorityFilter, setPriorityFilter] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');
  const [searchFilter, setSearchFilter] = React.useState('');
  const filteredTasks = getFilteredTasks(tasks, priorityFilter, statusFilter, searchFilter);

  return (

    <>
      <HeaderHome />
      <div className={styles.taskSummary}>
      <TaskSummary title="Task Totali" number={filteredTasks.length} flag="T"/>
      <TaskSummary title="Completati" number={filteredTasks.filter(task => task.isCompleted).length} flag="C" />
      <TaskSummary title="Scaduti" number={filteredTasks.filter(task => !task.isCompleted && getExpiredText(task.deadline, getCurrentDate())).length} flag="S"/>
      </div>
      <FiltriTask 
      priorityFilter={priorityFilter}
      setPriorityFilter={setPriorityFilter}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
      {filteredTasks.map(task => (<Task key={task.id} taskId={task.id} />))}

    </>
  )
}
    