import FormFieldItem from "../ui/FormFieldItem"
import { ICreateTaskForm } from "../../../app.interfaces"
import { useEffect, useState } from "react"
import { FormInputType, FormLayoutType } from "../../../app.types"
import getFormLayout from "../../utils/functions/getFormLayout.utils"
import { DefaultButton, Stack } from "@fluentui/react"

const CreateTaskForm: React.FC<ICreateTaskForm> = ({
  formConfig,
  onSubmit,
}) => {
  const [formLayout, setFormLayout] = useState<FormLayoutType[][]>([]) // save formLayout
  const [inputData, setInputData] = useState<FormInputType>({}) // save {fieldId = value}
  const [inputIsMandatory, setInputIsMandatory] = useState<FormInputType>({}) // save {fieldId = isMandatory}
  const [isWarning, setIsWarning] = useState<boolean>(false)

  // handle each field on change and set input data -- fieldId: fieldValue
  const handleOnChange = (id: string, value: string | number | Date) => {
    setInputData({ ...inputData, [id]: value })
  }

  // validate TextField and return error message
  const handleErrorMessage = (
    isMandatory: boolean,
    value: number | string | Date
  ) => {
    if (isMandatory && value == "")
      return (
        <div className="text-xs font-bold text-red-500">
          FIELD CANNOT BE EMPTY
        </div>
      )
  }

  // validate if field isMandatory && empty
  const handleOnSubmit = () => {
    const isValid = Object.keys(inputData).some(
      (id) => !inputData[id] && inputIsMandatory[id] == true
    )
    // console.log(inputData, inputIsMandatory)

    if (!isValid) {
      setIsWarning(false)
      onSubmit(inputData)
    } else setIsWarning(true)
  }

  // when component created, get the layout format, and set default value for inputData state
  useEffect(() => {
    const layout: FormLayoutType[][] = getFormLayout(formConfig)

    const formMandatory: FormInputType = {}
    const formInput: FormInputType = {}
    formConfig.forEach(({ id, data }) => {
      formInput[id] = data.defaultValue
      formMandatory[id] = data.isMandatory
    })

    setFormLayout(layout)
    setInputData(formInput)
    setInputIsMandatory(formMandatory)
  }, [formConfig])

  return (
    <>
      <Stack tokens={{ childrenGap: 12 }}>
        {formLayout.map((rowLayout, rowIndex) => (
          <Stack
            key={rowIndex}
            horizontal
            tokens={{ childrenGap: 12 }}
            verticalAlign="center"
          >
            {rowLayout.map((item, itemIndex) => (
              <FormFieldItem
                id={item.id}
                name={item.name}
                type={item.type}
                key={itemIndex}
                onChange={handleOnChange}
                defaultValue={item.data.defaultValue}
                required={item.data.isMandatory}
                onErrorMessage={(value) =>
                  handleErrorMessage(item.data.isMandatory, value)
                }
              />
            ))}
          </Stack>
        ))}

        <DefaultButton type="submit" text="SUBMIT" onClick={handleOnSubmit} />
        {isWarning && (
          <div className="text-xs font-bold text-red-500 text-center animate-bounce">
            CHECK YOUR INPUT
          </div>
        )}
      </Stack>
    </>
  )
}

export default CreateTaskForm
