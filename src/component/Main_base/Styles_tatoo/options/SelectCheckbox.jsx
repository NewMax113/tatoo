import React, {useState} from 'react'

function SelectCheckbox({ obj, className, onChange, defaultValue }) {
  let [val, setVal] = useState([])
  let a = (e)=> {
    setVal([...val, e])
    console.log(e)
  }
  return (
    <div style={{backgroundColor: 'white'}} onChange={(e)=> a(e.target.value)}>
      <div>{val.map(param => param + ' ')}</div>
      <div><input type='checkbox' value='Первый'></input>Первый</div>
      <div><input type='checkbox' value='Второй'></input>Второй</div>
      <div><input type='checkbox' value='Третий'></input>Третий</div>
    </div>
  )
}

export default SelectCheckbox