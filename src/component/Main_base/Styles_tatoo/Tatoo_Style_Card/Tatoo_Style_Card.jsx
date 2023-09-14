import React, { memo } from 'react'
import style from '../Main.module.css'
import { useNavigate } from 'react-router-dom'

const Tatoo_Style_Card = (props) => {
  let nav = useNavigate()
  return (
    <div className={style.style_tatoo}>
      <div>{props.id}</div>
      <div ><img src={props.img} className={style.img_card}></img></div>
      <div className={style.text_card}>{props.name}</div>
      <button onClick={() => {
        nav(`/masters/${props.id}`)
        props.ids(props.id)
      }}
        className={style.btn}>Прочитать</button>
    </div>
  )
}

export default Tatoo_Style_Card