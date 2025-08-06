function getCurrentDate(separator="/"){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${date.toString().padStart(2, '0')}${separator}${month.toString().padStart(2, '0')}${separator}${year}`;
}

function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
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
function getTaskStyle (deadline, isCompleted, use) {
  if(use === "modify") {
    if(isCompleted){
      return styles.modifyCompletedTask;
    } else {
      return styles.modifyTaskContainer;
    }
  }
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

function getMostActiveCategory(tasks) {
  if (!tasks || tasks.length === 0) {
    return ["", 0];
  }
  const categoryCount = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(categoryCount).reduce((max, current) => {
    return current[1] > max[1] ? current : max;
  }, ["", 0]);
}

function getMostActivePriority(tasks) {
  if (!tasks || tasks.length === 0) {
    return ["", 0];
  }
  const priorityCount = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(priorityCount).reduce((max, current) => {
    return current[1] > max[1] ? current : max;
  }, ["", 0]);
}

function getPerfomanceText(tasks) {
  if (tasks.length === 0) return "Nessuna task inserita";
  const completed = tasks.filter(task => task.isCompleted).length;
  const percent = (completed / tasks.length) * 100;
  if (percent === 0){
    return "Zero task completate. Si parte da zero."
  } else if (percent <= 25){
    return "Poco fatto, ma ce la puoi fare."
  } else if (percent <= 50){
    return "Metà strada, non mollare."
  } else if (percent < 100){
    return "Quasi lì, tieni duro."
  } else if (percent === 100){
    return "Fatto! Complimenti."
  } else {
    return "Dai ce la puoi fare"
  }
}
function getExpiredTasks (tasks){
  const expiredTasks = tasks.filter(task => !task.isCompleted && getExpiredText(task.deadline, getCurrentDate())).length;
  return expiredTasks;
}
export { getCurrentDate, getPriorityColor, getExpiredText, 
        getTaskStyle, getFilteredTasks, formatDate, getMostActiveCategory, 
        getMostActivePriority, getPerfomanceText, getExpiredTasks };
import styles from "./src/Home&LandPage/Task/Task.module.css";