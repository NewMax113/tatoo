import React, {  } from 'react'
import style from './Master.module.css'
import { useNavigate } from 'react-router-dom'
import { ids } from '../../../../redux/master-reducer'

const Master = (props) => {
    let nav = useNavigate()
    return (
<div className={style.style_tatoo}>
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

export default Master