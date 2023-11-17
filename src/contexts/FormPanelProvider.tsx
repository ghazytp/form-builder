// @ts-nocheck
import { createContext } from "react"

const FormPanelContext = createContext({})

const FormPanelProvider = ({ value, children }) => {
  return (
    <FormPanelContext.Provider value={value}>
      {children}
    </FormPanelContext.Provider>
  )
}

export default FormPanelProvider
