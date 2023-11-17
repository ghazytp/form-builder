import { FieldType } from "../../../app.enum"
import { FormConfigType, FormLayoutType } from "../../../app.types"

const getType = (type: string): FieldType | string => {
  if (type == FieldType.TextField) return FieldType.TextField
  if (type == FieldType.DatePicker) return FieldType.DatePicker
  if (type == FieldType.SpinButton) return FieldType.SpinButton
  if (type == FieldType.DescField) return FieldType.DescField
  return ""
}

const getFormLayout = (formConfig: FormConfigType[]): FormLayoutType[][] => {
  const result: FormLayoutType[][] = formConfig.reduce((data, config) => {
    const { row, col, ...removedColRow } = config
    data[row] = data[row] || []
    data[row][col] = { ...removedColRow, type: getType(removedColRow.type) }
    return data
  }, [] as FormLayoutType[][])

  return result
}

export default getFormLayout
