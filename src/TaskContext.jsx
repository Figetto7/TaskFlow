import React from "react";

const TaskContext = React.createContext();

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([
    
  ])

  function addTask (newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function toggleTaskCompletion(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
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