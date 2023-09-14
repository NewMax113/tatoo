import React, { memo } from 'react'
import style from './Main.module.css'
import Tatoo_Style_Card from './Tatoo_Style_Card/Tatoo_Style_Card'



const Main = (props) => {
  console.log(props)
  let mapCardTatoo = props.post.map(m => <Tatoo_Style_Card id={m.id} img={m.img} name={m.name} key={m.id} ids={props.ids}></Tatoo_Style_Card>)
  return (
    <div>
      <div className={style.bg}>gf</div>
      <div className={style.card}>
        <div className={style.text_Styles_}>
          Стили
        </div>
        <div className={style.container}>
          {mapCardTatoo}
        </div>
      </div>
    </div>
  )
}

export default Main