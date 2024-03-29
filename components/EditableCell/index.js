import { useState, useEffect } from "react"

const updateMyData = (x, y, z) => { console.log("updated") }
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)
  const onChange = e => {
    setValue(e.target.value)
  }
  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }
  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  return <input value={value} onChange={onChange} onBlur={onBlur} className='bg-lightest-purple rounded opacity-100' />
}
export default EditableCell