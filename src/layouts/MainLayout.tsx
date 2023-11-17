import { Outlet } from "react-router-dom"
import NavigationBar from "../components/ui/NavigationBar"
import { Stack } from "@fluentui/react"
import FormConfigProvider from "../contexts/FormConfigProvider"
import { IMainLayout } from "../../app.interfaces"

const MainLayout: React.FC<IMainLayout> = () => {
  return (
    <FormConfigProvider>
      <NavigationBar />
      <Stack className="px-24 mt-[12px] h-[80vh]">
        <Outlet />
      </Stack>
    </FormConfigProvider>
  )
}

export default MainLayout
