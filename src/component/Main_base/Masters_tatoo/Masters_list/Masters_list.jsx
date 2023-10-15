import React, { memo } from 'react'
import Master from './Master'
import style from './Master.module.css'

const Masters_list = (props) => {
    let master = props.master.map(m => <Master id={m.id} name={m.name} img={m.img} ids={props.ids}/>)
    return (
        <div className={style.back}>
            <div className={style.container}>
                {master}
            </div>
        </div>

    )
}

export default Masters_list