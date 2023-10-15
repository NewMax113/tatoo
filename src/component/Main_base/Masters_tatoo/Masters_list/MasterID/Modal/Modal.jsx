import React, { memo } from 'react'
import css from './Modal.module.css'

const Modal = (props) => {
    console.log(props.visible)
    let vis = `${css.myModal}`
    if (props.visible==true) {
        vis = `${css.myModal} ${css.active}`
    }

    return (
        <div className={vis}>
            <div className={css.myModalContent}>
                {props.children}
                <button onClick={() => props.setvis(false)}>Закрыть</button>
            </div>
        </div>
    )
}

export default Modal