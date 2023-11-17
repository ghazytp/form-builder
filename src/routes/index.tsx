import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
// import TaskListViews from "../views/TaskListViews"
// import CreateTaskViews from "../views/CreateTaskViews"
import FormConfigViews from "../views/FormConfigViews"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <TaskListViews />,
      // },
      // {
      //   path: "/create-new-task",
      //   element: <CreateTaskViews />,
      // },
      {
        path: "/",
        element: <FormConfigViews />,
      },
    ],
  },
])

export default router
