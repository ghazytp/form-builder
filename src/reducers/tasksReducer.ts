import { TaskItemType } from "../../app.types"

export interface ITaskReducerAction {
  type: string
  payload: TaskItemType[]
}

const taskReducer = (tasks, action) => {
  const { type, payload } = action

  switch (type) {
    case "GET_TASKS_DATA":
      return [...tasks, ...payload]

    default:
      throw Error("UNKNOWN_ACTION: " + type)
  }
}

export default taskReducer
