import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { initializeIcons } from "@fluentui/font-icons-mdl2"

initializeIcons()

function App() {
  
  return <RouterProvider router={router} />
}

export default App
