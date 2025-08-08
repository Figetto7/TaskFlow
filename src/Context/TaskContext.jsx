import React from "react";
import { useReducer } from "react";
import tasksReducer from "./TaskContextOperations"
import initialTasks from "./TestTasks"; 
const TaskContext = React.createContext();


const TASKS_STORAGE_KEY = 'user-tasks';

function loadTasksFromStorage({
  storage = localStorage,
  fallback = initialTasks,
  key = TASKS_STORAGE_KEY,
} = {}) {
  try {
    const savedTasks = storage.getItem(key);
    if (!savedTasks) return fallback;

    const parsed = JSON.parse(savedTasks);

    if (!Array.isArray(parsed)) {
      console.warn('Formato non valido in localStorage, uso fallback.');
      return fallback;
    }

    return parsed;
  } catch (error) {
    console.error('Errore nel caricamento task da localStorage:', error);
    return fallback;
  }
}

function saveTasksToStorage(tasks, {
  storage = localStorage,
  key = TASKS_STORAGE_KEY,
} = {}) {
  try {
    const serialized = JSON.stringify(tasks);
    storage.setItem(key, serialized);
  } catch (error) {
    console.error('Errore nel salvataggio dei task su localStorage:', error);
  }
}




function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, loadTasksFromStorage());
  React.useEffect(() => { saveTasksToStorage(tasks) }, [tasks])



  function addTask (newTask) {
    dispatch({
      type: 'addedTask',
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      category: newTask.category,
      deadline: newTask.deadline,
      priority: newTask.priority,
      isCompleted: false
    });
  }

  function updateTask(updatedTask) {
    dispatch({
      type: 'updateTask',
      task: updatedTask,
    });
  }

  function deleteTask(taskId) {
    dispatch({
      type: 'deleteTask',
      id: taskId
    });
  }

  function toggleTaskCompletion(taskId) {
    dispatch({
      type: 'toggledTask',
      id: taskId,
    });
  }

 return (
  <TaskContext.Provider value={{
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion
  }}>
    {children}
  </TaskContext.Provider>
 )
}

export const useTaskContext = () => React.useContext(TaskContext);
export default TaskContextProvider;