import { Draggable } from "react-beautiful-dnd"
import { IDraggableMenuField } from "../../../app.interfaces"
import { Stack, Text } from "@fluentui/react"

const DraggableMenuField: React.FC<IDraggableMenuField> = ({
  name,
  type,
  menuId,
  menuIndex,
}) => {
  return (
    <Draggable draggableId={menuId} index={menuIndex} key={menuId}>
      {(provided, snapshot) => (
        <>
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Stack className="rounded bg-white border border-gray-400 p-3 text-center">
              <Text>{name.toUpperCase()}</Text>
              <Text variant="small">{type.toUpperCase()}</Text>
            </Stack>
          </div>
          {snapshot.isDragging && (
            <Stack className="rounded bg-white border border-gray-400 p-3 text-center ">
              <Text>{name.toUpperCase()}</Text>
            </Stack>
          )}
        </>
      )}
    </Draggable>
  )
}

export default DraggableMenuField
