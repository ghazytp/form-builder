import { Stack } from "@fluentui/react"
import { Droppable } from "react-beautiful-dnd"
import DraggableMenuField from "./DraggableMenuField"
import { ISidebarConfigMenu } from "../../../app.interfaces"

const SidebarConfigMenu: React.FC<ISidebarConfigMenu> = ({ fieldMenu }) => {
  return (
    <Stack tokens={{ padding: 12 }} className="h-full rounded-l">
      <Droppable droppableId="MENU" isDropDisabled={true}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Stack tokens={{ childrenGap: 12 }}>
              {fieldMenu.map((menu, menuIndex) => (
                <DraggableMenuField
                  menuId={menu.id}
                  menuIndex={menuIndex}
                  name={menu.name}
                  key={menuIndex}
                  type={menu.type}
                />
              ))}
            </Stack>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Stack>
  )
}

export default SidebarConfigMenu
