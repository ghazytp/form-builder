import { IFieldItemCover } from "../../../app.interfaces"

const FieldItemCover: React.FC<IFieldItemCover> = ({ disabled }) => {
  return disabled == true ? (
    <div className=" w-full h-full absolute top-0 left-0 rounded hover:cursor-pointer z-10">
      
    </div>
  ) : (
    ""
  )
}

export default FieldItemCover
