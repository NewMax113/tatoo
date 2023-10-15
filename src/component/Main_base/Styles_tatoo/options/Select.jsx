import React from 'react'

function Select({ obj, className, onChange, valuee, defaultValue }) {
  return (
    <select
      className={className}
      value={valuee}
      onChange={e => onChange(e.target.value)}>
      <option value='' disabled>{defaultValue}</option>
      {obj.map(val => <option value={val.value}>{val.text}</option>)}
    </select>
  )
}

export default Select