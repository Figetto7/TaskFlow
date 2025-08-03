function getCurrentDate(separator="/"){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${date.toString().padStart(2, '0')}${separator}${month.toString().padStart(2, '0')}${separator}${year}`;
}

function getPriorityColor(priority) {
  switch (priority.toLowerCase()) {
    case 'alta':
      return styles.highPriority;
    case 'media':
      return styles.mediumPriority;
    case 'bassa':
      return styles.lowPriority;
    default:
      return styles.defaultPriority;
  }
}

function getExpiredText (deadline, currentDate) {
  const deadlineDate = new Date(deadline.split("/").reverse().join("-"));
  const current = new Date(currentDate.split("/").reverse().join("-"));

  if (deadlineDate < current) {
    return true
  }
  return false;
}
function getTaskStyle (deadline, isCompleted) {
  if(isCompleted){
    return styles.completedTask;
  }
  if(getExpiredText(deadline, getCurrentDate())){
    return `${styles.expiredContent} ${styles.taskContainer}`;
  } else {
    return styles.taskContainer;
  }
}

function getFilteredTasks(tasks, priorityFilter, statusFilter, searchFilter) {
  if(undefined === tasks || null === tasks) {
    return [];
  }
  return tasks.filter(task => {
    const matchesPriority = !priorityFilter || task.priority.toLowerCase() === priorityFilter.toLowerCase();
    const matchesStatus = !statusFilter || (statusFilter === 'completed' ? task.isCompleted : !task.isCompleted);
    const matchesSearch = !searchFilter || task.title.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesPriority && matchesStatus && matchesSearch;
  });
}
export { getCurrentDate, getPriorityColor, getExpiredText, getTaskStyle, getFilteredTasks };
import styles from "./Task.module.css";