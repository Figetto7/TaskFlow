import React from 'react'
import styles from './ModifyTasks.module.css'
import Task from "../../Home&LandPage/Task/Task";
import { useTaskContext } from "../../Context/TaskContext";
import HeaderModifyTasks from "./HeaderModifyTasks/HeaderModifyTasks";
import FiltriTask from "../../Home&LandPage/FiltriTask/FiltriTask";
import { getFilteredTasks } from "../../../utils";

export default function ModifyTasks() {
  
  const { tasks } = useTaskContext();
  const [priorityFilter, setPriorityFilter] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');
  const [searchFilter, setSearchFilter] = React.useState('');
  const filteredTasks = getFilteredTasks(tasks, priorityFilter, statusFilter, searchFilter);

  return (
    <div className={styles.modifyTasksContainer}>
      <HeaderModifyTasks />
      <FiltriTask
      priorityFilter={priorityFilter}
      setPriorityFilter={setPriorityFilter}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      use="modify"
      />
      <div className={styles.modifyTasksList}>
        {filteredTasks.map(task => (<Task key={task.id} taskId={task.id} use="modify" />))}
      </div>
    </div>
  )
}