import { createContext } from "react"
import { IFormDragDropProvider } from "../../app.interfaces"

export const FormDragDropContext = createContext<any>({})

const FormDragDropProvider: React.FC<IFormDragDropProvider> = ({ value, children }) => {
  return (
    <FormDragDropContext.Provider value={value}>
      {children}
    </FormDragDropContext.Provider>
  )
}

export default FormDragDropProvider
