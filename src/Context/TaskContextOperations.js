export default function TasksReducer(tasks, action) {
  switch (action.type) {
    case 'addedTask':
      return [...tasks, {
        id: action.id,
        title: action.title,
        description: action.description,
        category: action.category,
        deadline: action.deadline,
        priority: action.priority,
        isCompleted: action.isCompleted
      }];
    case 'updateTask':
      return tasks.map((task) =>
        task.id === action.task.id ? { ...task, ...action.task } : task
      );
    case 'deleteTask':
      return tasks.filter((task) => task.id !== action.id);
    case 'toggledTask':
      return tasks.map((task) =>
        task.id === action.id ? { ...task, isCompleted: !task.isCompleted } : task
      );
    default: 
      throw new Error('Unknown action: ' + action.type);
  }
}