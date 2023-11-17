import { FormConfigType } from "../../../app.types"

const FORM_CONFIG_DEFAULT: FormConfigType[] = [
  {
    id: "text-id-9lu372tmo",
    name: "Title",
    type: "TextField",
    data: { isMandatory: true, defaultValue: "Watch 5 Minutes Craft" },
    row: 0,
    col: 0,
  },
  {
    id: "text-id-1j8k0dp8v8",
    name: "Subtitle",
    type: "TextField",
    data: {
      isMandatory: false,
      defaultValue: "Cool D.I.Y Craft to make under 5 Min",
    },
    row: 0,
    col: 1,
  },
  {
    id: "desc-id-m7qtw4a7v",
    name: "Summary",
    type: "DescField",
    data: {
      isMandatory: false,
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    row: 1,
    col: 0,
  },
  {
    id: "spin-id-1ln0j6gydc",
    name: "Spin Button",
    type: "SpinButton",
    data: { isMandatory: true, defaultValue: 1234567890 },
    row: 2,
    col: 1,
  },
  {
    id: "date-id-19mpx6mf9o",
    name: "Date Picker",
    type: "DatePicker",
    data: { isMandatory: false, defaultValue: new Date() },
    row: 2,
    col: 0,
  },
]

export default FORM_CONFIG_DEFAULT
