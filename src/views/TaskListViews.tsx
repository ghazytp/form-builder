import { Stack } from "@fluentui/react"
import TaskListTable from "../components/task-list/TaskListTable"
import TaskProvider from "../contexts/TaskProvider"

const TaskListViews = () => {
  return (
    <TaskProvider>
      <Stack tokens={{ padding: 12 }}>
        <TaskListTable />
      </Stack>
    </TaskProvider>
  )
}

export default TaskListViews
