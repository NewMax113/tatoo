import React, { memo } from 'react'

const Button = (props) => {
    props.onClick()
    console.log(props)
  return (
    <button className={props.className} >
        {props.children}
    </button>
  )
}

export default Button