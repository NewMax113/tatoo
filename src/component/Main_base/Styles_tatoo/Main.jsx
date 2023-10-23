import React, { useEffect, useState } from 'react'
import style from './Main.module.css'
import Tatoo_Style_Card from './Tatoo_Style_Card/Tatoo_Style_Card'
import Select from './options/Select'
import Input from './options/Input'
import SelectCheckbox from './options/SelectCheckbox'
import MenuVisibleParams from './options/MenuVisibleParams'



const Main = (props) => {
  let a = []
for (let i = 1; i<=props.total_page; i++) {
  a.push(
  <span onClick={(e)=> props.pages(e.target.innerText)} style={{color: 'white'}}>{i}</span>)
}
  let mapCardTatoo = props.post.map(m => <Tatoo_Style_Card id={m.id} img={m.img} name={m.name} key={m.id} ids={props.ids} getCard={props.getCard}></Tatoo_Style_Card>)

  return (
    <div>
      <div className={style.bg}>ы</div>
      <div className={style.card}>
        <div className={style.text_Styles_}>
          Стили
        </div>
        <div className={style.div_select}>
          <MenuVisibleParams 
            className={style.select}
            sort_plus={props.sort_plus}
            filter_caterogy ={props.filter_caterogy}
            reset = {props.reset}
            reset_boolean={props.reset_boolean}
            >
          </MenuVisibleParams>
          <Input
            className={style.select}
            onChange={(input_text) => props.search(input_text)}
          />
        </div>
        <div className={style.container} >
          {mapCardTatoo}
        </div>
        <div style={{textAlign: 'center'}} >{a.map(x=>x)}</div>
      </div>
    </div>
  )
}

export default Main