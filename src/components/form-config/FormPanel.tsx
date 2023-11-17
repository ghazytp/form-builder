import {
  Panel,
  Stack,
  TextField,
  Text,
  Checkbox,
  DefaultButton,
  SpinButton,
  DatePicker,
} from "@fluentui/react"
import { useEffect, useState } from "react"
import { DefaultValueType, FormLayoutType } from "../../../app.types"
import { IFormPanel } from "../../../app.interfaces"
import { FieldType } from "../../../app.enum"

const FormPanel: React.FC<IFormPanel> = ({
  isOpen,
  handlePanel,
  fieldData,
  onSave,
}) => {
  const [inputValue, setInputValue] = useState<FormLayoutType>({
    id: "",
    name: "",
    type: "",
    data: { isMandatory: false, defaultValue: "" },
  })

  // console.log({ prev: prevDefaultValue.current, current: defaultValue })
  const onClosePanel = () => {
    handlePanel(false)
    setInputValue({
      id: "",
      name: "",
      type: "",
      data: { isMandatory: false, defaultValue: "" },
    })
  }

  // when component is created & fieldData is changed
  // set the value of input value, defaultValue, isRequired state
  useEffect(() => {
    // make sure fieldData exists
    if (fieldData && fieldData.data) {
      setInputValue(fieldData)
    }
  }, [fieldData])

  useEffect(() => {
    // make sure fieldData exists
    if (fieldData && fieldData.data) {
      setInputValue(fieldData)
    }
  }, [onSave])

  // function to change field data isMandatory, updating
  // isMandatory state and isRequired state
  const changeIsMandatory = (checked: boolean) => {
    const inputData: FormLayoutType = {
      ...inputValue,
      data: {
        ...inputValue.data,
        isMandatory: checked,
      },
    }

    setInputValue(inputData)
  }

  // function to handle TextField for field label name change
  const handleLabelOnChange = (e: any): void => {
    const value = e.target.value
    const inputData = { ...inputValue, name: value }

    setInputValue(inputData)
  }

  // function to handle TextField fpr field defaultValue change
  const handleOnChangeDefaultValue = (
    value: DefaultValueType | undefined
  ): void => {
    if (value != undefined) {
      const inputData: FormLayoutType = {
        ...inputValue,
        data: {
          ...inputValue.data,
          defaultValue: value,
        },
      }

      setInputValue(inputData)
    }
  }

  // save after save button is clicked
  // reset defaultValue state to ''
  // closing panel
  const handleOnSave = () => {
    onSave(inputValue)
    handlePanel(false)
  }

  const onRenderFooterContent = () => {
    return (
      <div className="flex gap-2">
        <DefaultButton
          className="bg-[#0078d4] text-white"
          onClick={handleOnSave}
        >
          Save
        </DefaultButton>
        <DefaultButton onClick={onClosePanel}>Cancel</DefaultButton>
      </div>
    )
  }

  return (
    <Panel
      headerText="Edit Form Label"
      isOpen={isOpen}
      onDismiss={onClosePanel}
      closeButtonAriaLabel="Close"
      onRenderFooterContent={onRenderFooterContent}
      // Stretch panel content to fill the available height so the footer is positioned
      // at the bottom of the page
      isFooterAtBottom={true}
    >
      <Stack tokens={{ childrenGap: 12 }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero fugit
          ab, qui dicta beatae expedita placeat aspernatur rem quo nisi.
        </Text>

        <TextField
          label="Change Label"
          value={inputValue.name}
          onChange={handleLabelOnChange}
        />

        {inputValue &&
          inputValue.data &&
          inputValue.type == FieldType.TextField && (
            <TextField
              label="Set Default Value"
              value={
                typeof inputValue.data.defaultValue == "string"
                  ? inputValue.data.defaultValue
                  : ""
              }
              onChange={(_, value) => handleOnChangeDefaultValue(value)}
            />
          )}
        {inputValue &&
          inputValue.data &&
          inputValue.type == FieldType.DescField && (
            <TextField
              label="Set Default Value"
              multiline
              rows={4}
              value={
                typeof inputValue.data.defaultValue == "string"
                  ? inputValue.data.defaultValue
                  : ""
              }
              onChange={(_, value) => handleOnChangeDefaultValue(value)}
            />
          )}
        {inputValue &&
          inputValue.data &&
          inputValue.type == FieldType.SpinButton && (
            <SpinButton
              label="Set Default Value"
              value={
                typeof inputValue.data.defaultValue == "string"
                  ? inputValue.data.defaultValue
                  : ""
              }
              onChange={(_, value) => handleOnChangeDefaultValue(Number(value))}
            />
          )}
        {inputValue &&
          inputValue.data &&
          inputValue.type == FieldType.DatePicker && (
            <DatePicker
              label="Set Default Value"
              value={
                new Date(
                  typeof inputValue.data.defaultValue == "string"
                    ? inputValue.data.defaultValue
                    : ""
                )
              }
              onSelectDate={(value) =>
                handleOnChangeDefaultValue(
                  typeof value == "string" ? new Date(value) : ""
                )
              }
            />
          )}

        <Checkbox
          label="Required Field"
          checked={inputValue?.data?.isMandatory}
          onChange={(_, checked) => changeIsMandatory(checked ?? false)}
        />
      </Stack>
    </Panel>
  )
}

export default FormPanel
