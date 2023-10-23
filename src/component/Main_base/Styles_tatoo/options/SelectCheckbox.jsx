import React, { useState, useEffect } from 'react'
import { cancel_reset } from '../../../../redux/post-reducer'

function SelectCheckbox({ obj, className, onChange, defaultValue, filter_caterogy, reset, reset_boolean }) {
  let [val, setVal] = useState([])
  let [val_check, setValcheck] = useState([{value: 'Первый', text: 'Первый'},{value: 'Второй', text: 'Второй'},{value: 'Третий', text: 'Третий'}])
  let a = (valuee, boolean) => {
    if (boolean == true) {
      setVal([...val, valuee])
    }
    else {
      setVal([...val].filter(value => value !== valuee))
    }
  }
  useEffect(() => {
    filter_caterogy(val)
  }
    , [val])
  if (reset_boolean === true) {
    //setVal([])
    reset(false)
    console.log('ok')
  }
  console.log(reset_boolean)
  let rend = val_check.map(attr=> <div><input type='checkbox' value={attr.value}></input>{attr.text}</div>)
  let rend2 = val_check.map(attr=> <div><input type='checkbox' value={attr.value}></input>Text</div>)
  return (
    <div className={className} onChange={(e) => a(e.target.value, e.target.checked)}>
      <div>Категории:</div>
      <div>{val.map(param => param + ' ')}</div>
      {rend }
    </div>
  )
}

export default SelectCheckbox