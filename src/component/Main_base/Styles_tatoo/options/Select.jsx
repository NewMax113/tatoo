import React, {useState} from 'react'

function Select({ obj, className, onChange, defaultValue }) {
  let [target, setTarget] = useState('')

  return (
    <select
      className={className}
      value={target}
      onChange={e => {
        onChange(e.target.value)
        setTarget(e.target.value)
        }}>
      <option value='' disabled>{defaultValue}</option>
      {obj.map(val => <option key={val.value} value={val.value}>{val.text}</option>)}
    </select>
  )
}

export default Select