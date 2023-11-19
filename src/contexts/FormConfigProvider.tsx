import { createContext, useEffect, useState } from "react"
import getFormConfig, { saveFormConfig } from "../api/form-config.api"
import React from "react"
import { FormConfigType } from "../../app.types"
import { IConfigProvider, IFormConfigContext } from "../../app.interfaces"
import FORM_CONFIG_DEFAULT from "../utils/constants/formConfig.utils"

export const FormConfigContext = createContext<IFormConfigContext>({
  formConfig: [],
  setConfig: () => {},
  saveConfig: () => {},
})

const FormConfigProvider: React.FC<IConfigProvider> = ({ children }) => {
  const [formConfig, setFormConfig] = useState<FormConfigType[]>([])
  const [isDummy, setIsDummy] = useState<boolean>(false)

  const setConfig = (config: FormConfigType[]) => {
    setFormConfig(config)
  }

  const saveConfig = () => {
    saveFormConfig(formConfig)
      // .then((data) => console.log(data))
      // .catch((error) => console.log(error))
  }

  // fetch form config
  useEffect(() => {
    getFormConfig()
      .then((config) => setFormConfig(config))
      .catch((_error) => {
        // console.log(error)
        setFormConfig(FORM_CONFIG_DEFAULT)
        setIsDummy(true)
      })
  }, [])

  return (
    <FormConfigContext.Provider value={{ formConfig, setConfig, saveConfig }}>
      {isDummy && <div className="absolute text-xs text-red-500">FETCH_FAILED_USING_CONFIG_DUMMY_DATA</div>}
      {children}
    </FormConfigContext.Provider>
  )
}

export default FormConfigProvider
