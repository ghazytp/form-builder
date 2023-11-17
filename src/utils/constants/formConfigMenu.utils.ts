import { FieldType } from "../../../app.enum"

const CONFIG_MENU = [
  {
    id: "text-field",
    type: FieldType.TextField,
    name: "Text Field",
    data: {
      isMandatory: false,
      defaultValue: "",
    },
  },
  {
    id: "spin-button",
    type: FieldType.SpinButton,
    name: "Spin Button",
    data: {
      isMandatory: false,
      defaultValue: 0,
    },
  },
  {
    id: "date-picker",
    type: FieldType.DatePicker,
    name: "Date Picker",
    data: {
      isMandatory: false,
      defaultValue: "",
    },
  },
  {
    id: "desc-field",
    type: FieldType.DescField,
    name: "Text Area Field",
    data: {
      isMandatory: false,
      defaultValue: "",
    },
  },
]

export default CONFIG_MENU
