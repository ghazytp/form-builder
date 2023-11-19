import { Stack } from "@fluentui/react"
import CreateTaskForm from "../components/create-task/CreateTaskForm"
import { useContext } from "react"
import { FormConfigContext } from "../contexts/FormConfigProvider"
import { FormInputType } from "../../app.types"
import { ICreateTaskViews } from "../../app.interfaces"
import { createNewTask } from "../api/tasks.api"

const CreateTaskViews: React.FC<ICreateTaskViews> = () => {
  // get form config from FormConfigContext Provider
  const { formConfig } = useContext(FormConfigContext)

  // function to handle create task form submit
  const handleSubmitInput = (inputData: FormInputType): void => {
    createNewTask(inputData)
      // .then((data) => console.log(data))
      // .catch((error) => console.log(error))
  }

  return (
    <Stack tokens={{ padding: 12 }}>
      <CreateTaskForm formConfig={formConfig} onSubmit={handleSubmitInput} />
    </Stack>
  )
}

export default CreateTaskViews
