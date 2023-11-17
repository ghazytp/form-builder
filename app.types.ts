import { FieldType } from "./app.enum"

export type FormConfigType = {
  id: string
  name: string
  type: string
  data: {
    isMandatory: boolean
    defaultValue: string | number | Date | boolean
  }
  row: number
  col: number
}

export type FormInputType = {
  [key: string]: string | number | Date | boolean
}

export type FormLayoutType = {
  id: string
  name: string
  type: FieldType | string
  data: {
    isMandatory: boolean
    defaultValue: string | number | Date | boolean
  }
}

export type DefaultValueType = string | number | boolean | Date

export type TaskItemType = {
  taskId: number
  [key: string]: string | number | Date | boolean
}
