import { Stack } from "@fluentui/react"
import { DragDropContext } from "react-beautiful-dnd"
import FormDropArea from "./FormDropArea"
import CONFIG_MENU from "../../utils/constants/formConfigMenu.utils"
import SidebarConfigMenu from "./SidebarConfigMenu"
import { useEffect, useState } from "react"
import getFormLayout from "../../utils/functions/getFormLayout.utils"
import generateUid from "../../utils/functions/generateUid.utils"
import { FieldType } from "../../../app.enum"
import FormDragDropProvider from "../../contexts/FormDragDropProvider"
import formatLayoutToConfig from "../../utils/functions/formatLayoutToConfig.utils"
import { IFormConfigContainer } from "../../../app.interfaces"
import { FormLayoutType } from "../../../app.types"

const FormConfigContainer: React.FC<IFormConfigContainer> = ({
  formConfig,
  onChange,
  onClick,
}) => {
  const [formLayout, setFormLayout] = useState<FormLayoutType[][]>([])

  useEffect(() => {
    const layout = getFormLayout(formConfig)
    setFormLayout(layout)
  }, [formConfig])

  // handle delete, use on change to update form config
  const handleDelete = (id: string): void => {
    const data = formLayout
      .map((rowLayout) => rowLayout.filter((fieldItem) => fieldItem.id !== id))
      .filter((rowLayout) => rowLayout.length > 0)

    const updatedFormConfig = formatLayoutToConfig(data)

    onChange(updatedFormConfig)
  }

  const handleEdit = (data: FormLayoutType) => {
    // console.log("HANDLE EDIT -- PASSING ON CLICK")
    onClick(data)
  }

  // create new field
  const createNewField = (
    fieldMenu: FormLayoutType
  ): FormLayoutType | undefined => {
    if (fieldMenu.type == FieldType.TextField) {
      return {
        id: `text-id-${generateUid()}`,
        name: fieldMenu.name,
        type: fieldMenu.type,
        data: {
          isMandatory: false,
          defaultValue: "",
        },
      }
    }
    if (fieldMenu.type == FieldType.DescField) {
      return {
        id: `desc-id-${generateUid()}`,
        name: fieldMenu.name,
        type: fieldMenu.type,
        data: {
          isMandatory: false,
          defaultValue: "",
        },
      }
    }
    if (fieldMenu.type == FieldType.DatePicker) {
      return {
        id: `date-id-${generateUid()}`,
        name: fieldMenu.name,
        type: fieldMenu.type,
        data: {
          isMandatory: false,
          defaultValue: "",
        },
      }
    }
    if (fieldMenu.type == FieldType.SpinButton) {
      return {
        id: `spin-id-${generateUid()}`,
        name: fieldMenu.name,
        type: fieldMenu.type,
        data: {
          isMandatory: false,
          defaultValue: 0,
        },
      }
    }
  }

  // handling event on drag end
  const onDragEnd = (result: any) => {
    const { source, destination } = result

    const tempLayout = [...formLayout]

    // if no destination return nothing
    if (!destination) return

    const sourceIndex = source.index
    const destIndex = destination.index

    const sourceId = source.droppableId
    const destId = destination.droppableId

    // console.log(sourceId, destId)
    if (sourceId === "FORM_AREA" && destId === "FORM_AREA") {
      // console.log("CHANGE ROW ORDER")
      const [removedRow] = tempLayout.splice(sourceIndex, 1)

      tempLayout.splice(destIndex, 0, removedRow)
    }

    // cancel merge row to column
    if (sourceId === "FORM_AREA" && destId.includes("DRAGGABLE_ROW")) return

    if (sourceId.includes("DRAGGABLE_ROW")) {
      if (destId.includes("DRAGGABLE_ROW")) {
        // console.log("ROW TO ROW")

        const sourceRowIndex = Number(sourceId.split("-")[1])
        const destRowIndex = Number(destId.split("-")[1])

        const sourceRow = tempLayout[sourceRowIndex]
        const destRow = tempLayout[destRowIndex]

        // console.log({sourceRow}, {destRow})
        const [removedField] = sourceRow.splice(sourceIndex, 1)

        destRow.splice(destIndex, 0, removedField)
      }

      // col to row
      if (destId == "FORM_AREA") {
        // console.log("COL TO ROW")

        // get source row Index
        const rowIndex = Number(sourceId.split("-")[1])

        // get source row array
        const sourceRow = tempLayout[rowIndex]

        // get the removed field
        const [removed] = sourceRow.splice(sourceIndex, 1)

        // make removed field as new row
        tempLayout.splice(destIndex, 0, [removed])
      }
    }

    // add new field to form
    if (sourceId === "MENU" && destId !== sourceId) {
      // console.log("ADD MORE FIELDS - FROM MENU")

      const getMenu = CONFIG_MENU[sourceIndex]

      if (destId.includes("ROW")) {
        // console.log("INSERT TO COL")
        const newField = createNewField(getMenu)
        const rowIndex = Number(destId.split("-")[1])

        const currentRow = tempLayout[rowIndex]

        newField && currentRow.splice(destIndex, 0, newField)
      }

      if (destId == "FORM_AREA") {
        // console.log("INSERT TO ROW")
        const newFieldRow = createNewField(getMenu)

        newFieldRow && tempLayout.splice(destIndex, 0, [newFieldRow])
      }
    }

    const filterEmptyLayout = tempLayout.filter((row) => row.length > 0)

    const updatedFormConfig = formatLayoutToConfig(filterEmptyLayout)
    onChange(updatedFormConfig)

    // setFormLayout(filterEmptyLayout)
  }

  return (
    <FormDragDropProvider value={{ handleDelete, handleEdit }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack horizontal verticalAlign="start" className="rounded h-full">
          <SidebarConfigMenu fieldMenu={CONFIG_MENU} />
          <FormDropArea formLayout={formLayout} />
        </Stack>
      </DragDropContext>
    </FormDragDropProvider>
  )
}

export default FormConfigContainer
