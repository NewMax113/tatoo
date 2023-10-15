import React, { useState } from 'react'
import css from '../../../Styles_tatoo/NowStyle/NowStyle.module.css'
import Modal from './Modal/Modal'

const MasterID = (props) => {
  console.log(props.master[0])
  let [vis, setvis] = useState(false)

  return (
    <div className={css.s}>
      {props.master == ''}
      <div className={css.container}>
        <img src={props.master[0].img} alt="" className={css.img_in_container} />
        <div>
          <div className={`${css.text_in_container} ${css.text_in_container3}`}>{props.master[0].name}</div>
          <div>
            <div className={`${css.text_in_container} ${css.text_in_container2}`} >Курсы: {props.master[0].cost}</div>
            <button className={`${css.text_in_container} ${css.text_in_container2} ${css.btn_text}`} onClick={() => { setvis(true) }}>Записаться</button>
            <Modal visible={vis} setvis={setvis}>text</Modal>
          </div>
        </div>
      </div>
      <div className={`${css.text_in_container} ${css.text_in_container2} ${css.text_in_container3}`}>
        Работы
        <div className={css.works}>
          {!props.master[0] ? <img src=''></img> : props.master[0].works.map(img => <img src={img} className={css.img_works}></img>)}
        </div>
      </div>
    </div>
  )
}

export default MasterID