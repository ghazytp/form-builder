import { Stack } from "@fluentui/react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import DraggableFormField from "./DraggableFormField"
import { IFormConfigRowContainer } from "../../../app.interfaces"

const FormConfigRowContainer: React.FC<IFormConfigRowContainer> = ({
  rowId,
  rowIndex,
  rowData,
}) => {
  return (
    <Draggable draggableId={rowId} index={rowIndex} key={rowId}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="transform-none min-w-[400px]"
        >
          <Droppable
            droppableId={rowId}
            direction="horizontal"
            ignoreContainerClipping={true}
          >
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={
                  snapshot.isDraggingOver
                    ? "bg-yellow-300 rounded h-[120px] max-w-[100%] transform-none"
                    : "rounded h-fit max-w-[100%]"
                }
              >
                <Stack horizontal tokens={{ childrenGap: 12 }}>
                  {rowData.map((formField, fieldIndex) => (
                    <DraggableFormField
                      fieldName={formField.name}
                      fieldIndex={fieldIndex}
                      fieldId={formField.id}
                      fieldType={formField.type}
                      key={fieldIndex}
                      data={formField}
                    />
                  ))}
                </Stack>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default FormConfigRowContainer
