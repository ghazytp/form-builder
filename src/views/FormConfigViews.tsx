import { useContext, useState } from "react"
import { FormConfigContext } from "../contexts/FormConfigProvider"
import FormConfigContainer from "../components/form-config/FormConfigContainer"
import { IFormConfigViews } from "../../app.interfaces"
import { FormConfigType, FormLayoutType } from "../../app.types"
import FormPanel from "../components/form-config/FormPanel"

const FormConfigViews: React.FC<IFormConfigViews> = () => {
  // get the formConfig data from FromConfigContext
  const { formConfig, setConfig } = useContext(FormConfigContext)

  // panel trigger open / close
  const [isOpenPanel, setIsOpenPanel] = useState<boolean>(false)
  const [editedField, setEditedField] = useState<FormLayoutType>({
    id: "",
    name: "",
    type: "",
    data: { isMandatory: false, defaultValue: "" },
  })

  // save any layout changes (position, label, etc) from DragDrop component
  // then save it to formConfig
  const onLayoutChange = (formLayout: FormConfigType[]): void => {
    setConfig(formLayout)
  }

  // because data from field only give id, name, type
  // but for from config also need row col
  // so when saving the updatedField, reassingn row, col from formConfig
  const saveEditValue = (editedField: FormLayoutType) => {
    const updatedConfig: FormConfigType[] = formConfig.map((field) => {
      if (field.id == editedField.id) {
        field = { ...field, ...editedField }
      }
      return field
    })

    setConfig(updatedConfig)
    setEditedField({
      id: "",
      name: "",
      type: "",
      data: { isMandatory: false, defaultValue: "" },
    })
  }

  // handling when field is clicked, and opening panel to edit & set defaultValue
  const onClickField = (data: FormLayoutType) => {
    setIsOpenPanel(true)
    setEditedField(data)
  }

  return (
    <>
      <FormConfigContainer
        formConfig={formConfig}
        onChange={onLayoutChange}
        onClick={onClickField}
      />
      <FormPanel
        isOpen={isOpenPanel}
        handlePanel={(value) => setIsOpenPanel(value)}
        fieldData={editedField}
        onSave={saveEditValue}
      />
    </>
  )
}

export default FormConfigViews
