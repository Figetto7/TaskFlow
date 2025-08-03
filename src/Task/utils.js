function getCurrentDate(separator="/"){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${date.toString().padStart(2, '0')}${separator}${month.toString().padStart(2, '0')}${separator}${year}`;
}

function getPriorityColor(priority) {
  switch (priority) {
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

export { getCurrentDate, getPriorityColor, getExpiredText };
import styles from "./Task.module.css";