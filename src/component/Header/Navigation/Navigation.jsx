import React, { memo } from 'react'
import style from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={style.divs}>
            <div className={style.test3}>
                <NavLink to='/card'>Mr Tattoo</NavLink>
            </div>
            <div className={style.test}>
                <NavLink to='/card'>Стили</NavLink>
            </div>
            <div className={style.test} >
                {/* <a href=''>Мастера</a> */}
                <NavLink to='/masters'>Мастера</NavLink>
            </div>
            <div className={style.test}>
            <NavLink to='/works_img'>Наши работы</NavLink>
            </div>
            <div className={style.test}>
                <a href="">Отзывы</a>
            </div>
            <div className={style.phone}>
                Запись: +7(999)-999-99-99
            </div>
        </div>
    )
}

export default Navigation