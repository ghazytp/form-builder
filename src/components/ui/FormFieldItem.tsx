import {
  DatePicker,
  Position,
  SpinButton,
  Stack,
  TextField,
  Text,
} from "@fluentui/react"
import { IFormFieldItem } from "../../../app.interfaces"
import { FieldType } from "../../../app.enum"
import FieldItemCover from "../form-config/FieldItemCover"

const FormFieldItem: React.FC<IFormFieldItem> = ({
  id,
  name,
  type,
  onChange,
  isDisabled = false,
  defaultValue,
  required,
  onErrorMessage,
}) => {
  const components = [
    {
      type: FieldType.TextField,
      component: (
        <TextField
          label={name}
          onChange={(_, value) => onChange && onChange(id, value)}
          disabled={isDisabled}
          defaultValue={!isDisabled ? defaultValue : ""}
          onGetErrorMessage={onErrorMessage && onErrorMessage}
        />
      ),
    },
    {
      type: FieldType.DescField,
      component: (
        <TextField
          label={name}
          onChange={(_, value) => onChange && onChange(id, value)}
          disabled={isDisabled}
          multiline
          rows={isDisabled ? 0 : 4}
          defaultValue={!isDisabled ? defaultValue : ""}
          onGetErrorMessage={onErrorMessage && onErrorMessage}
        />
      ),
    },
    {
      type: FieldType.DatePicker,
      component: (
        <DatePicker
          label={name}
          onSelectDate={(value) => onChange && onChange(id, value)}
          disabled={isDisabled}
          value={!isDisabled ? new Date(defaultValue) : undefined}
        />
      ),
    },
    {
      type: FieldType.SpinButton,
      component: (
        <SpinButton
          label={name}
          labelPosition={Position.top}
          onChange={(_, value) => onChange && onChange(id, Number(value))}
          disabled={isDisabled}
          defaultValue={!isDisabled ? defaultValue : 0}
        />
      ),
    },
  ]

  return components.map(
    (item, itemIndex) =>
      item.type == type && (
        <Stack.Item
          key={itemIndex}
          grow
          className={
            isDisabled
              ? "px-4 py-3 bg-white border border-neutral-400 rounded relative h-full"
              : "px-4 py-3 bg-white border border-neutral-400 rounded relative z-10 self-baseline"
          }
        >
          {required && (
            <Text
              variant="xSmall"
              className="absolute text-red-500 font-bold right-4"
            >
              REQUIRED
            </Text>
          )}
          <FieldItemCover disabled={isDisabled} />
          {item.component}
        </Stack.Item>
      )
  )
}

export default FormFieldItem
