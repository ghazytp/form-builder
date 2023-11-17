import { FormConfigType, FormInputType, FormLayoutType } from "./app.types"
import { FieldType } from "./app.enum"

export interface ICreateTaskForm {
  formConfig: FormConfigType[]
  onSubmit: (data: FormInputType) => void
}

export interface IFormFieldItem {
  id: string
  name: string
  type: FieldType | string
  onChange?: (id: string, value: any) => void
  isDisabled?: boolean
  defaultMode?: boolean
  defaultValue?: any
  required?: boolean
  onErrorMessage?: (value: any) => any
}

export interface ISidebarConfigMenu {
  fieldMenu: FormLayoutType[]
}

export interface IDraggableMenuField {
  name: string
  type: FieldType | string
  menuId: string
  menuIndex: number
}

export interface IFormConfigViews {}

export interface ICreateTaskViews {}

export interface IMainLayout {}

export interface IFormDragDropProvider {
  value: any
  children: React.ReactNode
}

export interface IConfigProvider {
  children: React.ReactNode
}

export interface IFormConfigContext {
  formConfig: FormConfigType[]
  setConfig: (config: FormConfigType[]) => void
  saveConfig: () => void
}

export interface INavigationBar {}

export interface IFormDropArea {
  formLayout: FormLayoutType[][]
}

export interface IFormConfigRowContainer {
  rowId: string
  rowIndex: number
  rowData: FormLayoutType[]
}

export interface IFormConfigContainer {
  formConfig: FormConfigType[]
  onChange: (config: FormConfigType[]) => void
  onClick: (data: any) => void
}

export interface IFieldItemCover {
  disabled: boolean
}

export interface IDraggableFormField {
  fieldName: string
  fieldId: string
  fieldIndex: number
  fieldType: FieldType | string
  data: FormLayoutType
}

export interface IFormPanel {
  isOpen: boolean
  handlePanel: (value: boolean) => void
  fieldData: FormLayoutType
  onSave: (data: FormLayoutType) => void
}

export interface ITaskProvider {
  children: React.ReactNode
}