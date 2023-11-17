import {
  CheckboxVisibility,
  DetailsList,
  IColumn,
  Stack,
} from "@fluentui/react"
import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../../contexts/TaskProvider"
import { FormConfigContext } from "../../contexts/FormConfigProvider"
import { getAllTaskData } from "../../api/tasks.api"
import { FieldType } from "../../../app.enum"
import TASKS_DUMMY from "../../utils/constants/taskListDummy.utils"

const TaskListTable = () => {
  const { formConfig } = useContext(FormConfigContext)
  const { tasks, dispatch } = useContext(TaskContext)
  const [isDummy, setIsDummy] = useState<boolean>(false)

  const getColumns = (): IColumn[] => {
    const result: IColumn[] = [
      {
        key: "id",
        name: "ID",
        fieldName: "taskId",
        minWidth: 20,
        maxWidth: 20,
      },
    ]

    // column - item -> fieldName
    formConfig.forEach((field) => {
      const tmp: IColumn = {
        key: field.id,
        name: field.name,
        fieldName: field.id,
        minWidth: 10,
        maxWidth: field.type == FieldType.SpinButton ? 40 : 140,
        // onColumnClick: (_, data) => console.log(data, "COLUMN"),
        // render each item in column
        onRender: (item) => {
          return (
            <span>
              {field.id.includes("date")
                ? new Date(item[field.id]).toDateString()
                : item[field.id]}
            </span>
          )
        },
      }

      result.push(tmp)
    })

    return result
  }

  useEffect(() => {
    getAllTaskData()
      .then((taskData) =>
        dispatch({ type: "GET_TASKS_DATA", payload: taskData })
      )
      .catch((_error) => {
        // console.log(error)
        dispatch({ type: "GET_TASKS_DATA", payload: TASKS_DUMMY })
        setIsDummy(true)
      })
  }, [])

  return (
    <Stack className="border border-neutral-400 rounded p-3">
      {isDummy && <div className="absolute text-xs text-red-500 right-0 top-0 z-50">FETCH_FAILED_USING_TASK_DUMMY_DATA</div>}
      <Stack className="max-h-[400px] overflow-y-auto no-scrollbar">
        <DetailsList
          compact
          checkboxVisibility={CheckboxVisibility.hidden}
          items={tasks}
          columns={getColumns()}
          viewport={{height: 100, width: 1000}}
          className="no-scrollbar"
        />
      </Stack>
    </Stack>
  )
}

export default TaskListTable
