import { IconButton, Stack } from "@fluentui/react"
import { Draggable } from "react-beautiful-dnd"
import FormFieldItem from "../ui/FormFieldItem"
import { useContext } from "react"
import { FormDragDropContext } from "../../contexts/FormDragDropProvider"
import { IDraggableFormField } from "../../../app.interfaces"

const DraggableFormField: React.FC<IDraggableFormField> = ({
  fieldName,
  fieldId,
  fieldIndex,
  fieldType,
  data,
}) => {
  const { handleDelete, handleEdit } = useContext(FormDragDropContext)

  return (
    <Stack.Item grow>
      <Draggable draggableId={fieldId} index={fieldIndex} key={fieldId}>
        {(provided, snapshot) => (
          <>
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`relative ${snapshot.isDragging ? "max-w-[20%]" : ""}`}
            >
              <IconButton
                iconProps={{ iconName: "Delete" }}
                className="text-red-500 font-bold absolute top-0 right-0 z-30 hover:bg-transparent"
                onClick={() => handleDelete(fieldId)}
              />
              <div onClick={() => handleEdit(data)}>
                <FormFieldItem
                  id={fieldId}
                  name={fieldName}
                  type={fieldType}
                  isDisabled={true}
                  defaultValue={data.data.defaultValue}
                />
              </div>
            </div>
          </>
        )}
      </Draggable>
    </Stack.Item>
  )
}

export default DraggableFormField
