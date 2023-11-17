import { FormConfigType, FormLayoutType } from "../../../app.types"

const formatLayoutToConfig = (
  formLayout: FormLayoutType[][]
): FormConfigType[] => {
  const result = formLayout
    .map((rowLayout, rowIndex) => {
      return rowLayout.map((fieldItem, colIndex) => {
        return { ...fieldItem, row: rowIndex, col: colIndex }
      })
    })
    .flat()

  return result
}

export default formatLayoutToConfig
