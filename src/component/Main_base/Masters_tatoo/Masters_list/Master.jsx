import React, {  } from 'react'
import style from './Master.module.css'

const Master = (props) => {
    return (
        <div id={props.id} key={props.id}>
            <div className={style.style_tatoo}>
                {props.name}
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Master