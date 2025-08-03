import React from "react";

const TaskContext = React.createContext();

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([
    {
      id:1,
      title:"Completare presentazione Q4",
      description:"Preparare la presentazione dei risultati del quarto trimestre per il meeting con il management.",
      category:"Lavoro",
      deadline:"2023-12-15",
      priority:"Alta",
      isCompleted:false,
    },
    {
      id:2,
      title:"Organizzare riunione team",
      description:"Pianificare una riunione con il team per discutere i progressi del progetto.",
      category:"Lavoro",
      deadline:"2023-12-10",
      priority:"Media",
      isCompleted:false,
    },
    {
      id:3,
      title:"Comprare regali di Natale",
      description:"Acquistare regali per la famiglia e gli amici in vista delle festività.",
      category:"Personale",
      deadline:"2023-12-20",
      priority:"Bassa",
      isCompleted:false,
    }
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