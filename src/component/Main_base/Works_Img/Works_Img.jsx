import React from 'react'
import works_img from '../../../redux/Masters_img/works_img'
import css from './Works_Img.module.css'

function Works_Img() {
    console.log(works_img)
  return (
    <div className={css.colums}>{works_img.map(img => <img src={img} className={css.img}></img> )}{works_img.map(img => <img src={img} className={css.img}></img> )}</div>
  )
}

export default Works_Img