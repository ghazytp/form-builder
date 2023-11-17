import axios from "axios"
import { FormConfigType } from "../../app.types"

const baseUrl = import.meta.env.VITE_BASE_URL

const getFormConfig = async () => {
  try {
    const { data } = await axios.get(baseUrl + "/form-config")
    return data
  } catch (error) {
    throw error
  }
}

export const saveFormConfig = async (formConfig: FormConfigType[]) => {
  try {
    const { data } = await axios.post(baseUrl + "/form-config", { formConfig })
    return data
  } catch (error) {
    throw error
  }
}

export default getFormConfig
