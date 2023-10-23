import React, {useState} from 'react'

function Select({ obj, className, onChange, defaultValue }) {
  let [target, setTarget] = useState('')

  return (
    <div className={className}> Сортиовка:
    <select
      
      value={target}
      onChange={e => {
        onChange(e.target.value)
        setTarget(e.target.value)
        }}>
      <option value='' disabled style={{background: 'black'}}>{defaultValue}</option>
      {obj.map(val => <option key={val.value} style={{background: 'black'}} value={val.value}>{val.text}</option>)}
    </select></div>
  )
}

export default Select