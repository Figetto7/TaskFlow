import React from "react";
import { useReducer } from "react";
import tasksReducer from "./TaskContextOperations"
import initialTasks from "./TestTasks"; 
const TaskContext = React.createContext();

function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

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