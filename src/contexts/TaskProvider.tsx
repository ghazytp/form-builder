import { createContext, useReducer } from "react"
import taskReducer from "../reducers/tasksReducer"
import { ITaskProvider } from "../../app.interfaces"
import { TaskItemType } from "../../app.types"

type TaskReducerAction = {
  type: string
  payload: TaskItemType[]
}

interface ITaskContext {
  tasks: TaskItemType[]
  dispatch: React.Dispatch<TaskReducerAction>
}

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  dispatch: () => {},
})
const initialTask: TaskItemType[] = []

const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask)
  

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
