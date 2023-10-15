import React, { useMemo } from 'react'
import style from './Main.module.css'
import Tatoo_Style_Card from './Tatoo_Style_Card/Tatoo_Style_Card'
import Select from './options/Select'
import Input from './options/Input'



const Main = (props) => {

  let text = ''
  // let mapCardTatoo = !props.post_filter == ''
  //   ? props.post_filter.map(m => <Tatoo_Style_Card id={m.id} img={m.img} name={m.name} key={m.id} ids={props.ids} getCard={props.getCard}></Tatoo_Style_Card>)
  //   : props.post.map(m => <Tatoo_Style_Card id={m.id} img={m.img} name={m.name} key={m.id} ids={props.ids} getCard={props.getCard}></Tatoo_Style_Card>)

  let mapCardTatoo = props.post_filter.map(m => <Tatoo_Style_Card id={m.id} img={m.img} name={m.name} key={m.id} ids={props.ids} getCard={props.getCard}></Tatoo_Style_Card>)
  


  return (
    <div>
      <div className={style.bg}>ы</div>
      <div className={style.card}>
        <div className={style.text_Styles_}>
          Стили
        </div>
        <div className={style.div_select}>
          <Select obj={
            [{ value: 'name+', text: 'А-Я' }, { value: 'name-', text: 'Я-А' }]}
            valuee={text}
            onChange={(target) => props.sort_plus(target)}
            className={style.select}
            defaultValue={'Сортировка по'}
          >
          </Select>
          <Input
            className={style.select}
            onChange={(input_text) => props.search(input_text)}
          >
          </Input>
        </div>
        <div className={style.container} >
          {mapCardTatoo}
        </div>
      </div>
    </div>
  )
}

export default Main