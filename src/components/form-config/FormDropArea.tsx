import { Stack } from "@fluentui/react"
import FormConfigRowContainer from "./FormConfigRowContainer"
import { Droppable } from "react-beautiful-dnd"
import { IFormDropArea } from "../../../app.interfaces"

const FormDropArea: React.FC<IFormDropArea> = ({ formLayout }) => {
  return (
    <Stack.Item grow className="h-full pt-3">
      <Stack className="h-full p-3 border border-neutral-400 rounded">
        <Stack
          className={
            formLayout.length > 0
              ? "overflow-y-auto no-scrollbar h-full"
              : "overflow-y-auto no-scrollbar h-full bg-neutral-300 rounded"
          }
        >
          <Droppable droppableId="FORM_AREA" ignoreContainerClipping={true}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={
                  snapshot.isDraggingOver
                    ? "transform-none bg-sky-200 rounded h-full"
                    : ""
                }
              >
                <Stack tokens={{ childrenGap: 12 }}>
                  {formLayout.map((rowData, rowIndex) => (
                    <FormConfigRowContainer
                      rowData={rowData}
                      rowIndex={rowIndex}
                      rowId={`DRAGGABLE_ROW-${rowIndex}`}
                      key={rowIndex}
                    />
                  ))}
                </Stack>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Stack>
      </Stack>
    </Stack.Item>
  )
}

export default FormDropArea
