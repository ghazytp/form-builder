import axios from "axios"
import { FormInputType } from "../../app.types"

const baseUrl = import.meta.env.VITE_BASE_URL

export const getAllTaskData = async () => {
  try {
    const { data } = await axios.get(baseUrl + "/tasks")
    return data
  } catch (error) {
    throw error
  }
}

export const getTaskById = async (taskId: number) => {
  try {
    const { data } = await axios.get(baseUrl + `/tasks/${taskId}`)
    return data
  } catch (error) {
    // console.log(error)
    throw error
  }
}

export const createNewTask = async (newTask: FormInputType) => {
  try {
    const { data } = await axios.post(baseUrl + `/tasks`, { newTask })
    return data
  } catch (error) {
    // console.log(error)
    throw error
  }
}
