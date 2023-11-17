import { DefaultButton, Stack, Text } from "@fluentui/react"
// import { NavLink } from "react-router-dom"
import { INavigationBar } from "../../../app.interfaces"
import { useContext } from "react"
import { FormConfigContext } from "../../contexts/FormConfigProvider"

const NavigationBar: React.FC<INavigationBar> = () => {
  const { formConfig, saveConfig } = useContext(FormConfigContext)
  return (
    <Stack
      horizontal
      verticalAlign="center"
      tokens={{ childrenGap: 24, padding: 10 }}
      horizontalAlign="space-between"
      className="shadow-md border-neutral-400 px-24">
      <Stack horizontal tokens={{ childrenGap: 24, padding: 10 }}>
        <Text variant="xLarge">FORM BUILDER</Text>
        <Stack horizontal verticalAlign="center">
          <ul className="flex items-center justify-center gap-4">
            {/* <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "underline" : ""
                }
              >
                <Text
                  variant="medium"
                  className="hover:underline cursor-pointer"
                >
                  TASK LIST
                </Text>
              </NavLink>
            </li> */}

            {/* <li>
              <NavLink
                to="create-new-task"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "underline" : ""
                }
              >
                <Text
                  variant="medium"
                  className="hover:underline cursor-pointer"
                >
                  NEW TASK
                </Text>
              </NavLink>
            </li> */}

            {/* <li>
              <NavLink
                to="form-config"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "underline" : ""
                }
              >
                <Text
                  variant="medium"
                  className="hover:underline cursor-pointer"
                >
                  SETTINGS
                </Text>
              </NavLink>
            </li> */}
          </ul>
        </Stack>
      </Stack>

      <Stack.Item>
        <DefaultButton onClick={saveConfig}>
          <a
            type="button"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(formConfig)
            )}`}
            download={"form-config.json"}>
            DOWNLOAD FORM CONFIG
          </a>
        </DefaultButton>
      </Stack.Item>
    </Stack>
  )
}

export default NavigationBar
