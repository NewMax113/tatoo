import React, { useState } from 'react'
import css from './NowStyle.module.css'
import Button from './button/Button'
import Modal from './Modal/Modal'

const NowStyle = (props) => {
  console.log(props.card)
  //
  let [vis, setvis] = useState(false)

  
  return (
    
    <div className={css.s}>
      {props.card == ''}
      <div className={css.container}>
        <img src={props.card[0].img} alt="" className={css.img_in_container} />
        <div>
          <div className={`${css.text_in_container} ${css.text_in_container3}`}>{props.card[0].name}</div>
          <div>
            <div className={`${css.text_in_container} ${css.text_in_container2}`} >Стоимость: {props.card[0].cost}</div>
            <div className={`${css.text_in_container} ${css.text_in_container2}`}>Мастера: </div>
            <button className={`${css.text_in_container} ${css.text_in_container2} ${css.btn_text}`} onClick={()=>{setvis(true)}}>Записаться</button>
            <Modal visible={vis} setvis={setvis}>text</Modal>
          </div>
        </div>
      </div>
      <div className={`${css.text_in_container} ${css.text_in_container2}`}>
        {props.card[0].description}
      </div>
    </div>
  )
}

export default NowStyle