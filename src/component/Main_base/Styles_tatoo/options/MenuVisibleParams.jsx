import React from 'react'
import Select from './Select'
import SelectCheckbox from './SelectCheckbox'
import Input from './Input'
import { useState } from 'react'
import cs from './Menu.module.css'

const MenuVisibleParams = ({ className, sort_plus, filter_caterogy, reset, reset_boolean }) => {
    let [visible, setVisible] = useState(false)
    return (
        <>
            <button className={cs.btn} onClick={() => setVisible(!visible)}><span className={cs.span}>&#9776;</span>Все фильтры</button>
            <div className={visible == true ? cs.vis : cs.novis} onClick={() => setVisible(false)}>
                <div onClick={(e)=> e.stopPropagation()}> <div className={cs.tx}>Фильтры</div>
                    <div>
                        <Select obj={
                            [{ value: 'name+', text: 'А-Я' }, { value: 'name-', text: 'Я-А' }]}
                            onChange={(target) => sort_plus(target)}
                            className={cs.tx2}
                            defaultValue={'Сортировка по'}
                        />
                    </div>
                    <div>
                        <SelectCheckbox obj={
                            [{ value: 'Первый', text: 'Первый' }, { value: 'Второй', text: 'Второй' }, { value: 'Третий', text: 'Третий' }, { value: 'Четвертый', text: 'Четвертый' }]}
                            className={cs.tx2}
                            defaultValue={'Фильтр по'}
                            filter_caterogy = {filter_caterogy}
                            reset = {reset}
                            reset_boolean ={reset_boolean}
                        />
                    </div>
                    <button style={{color: 'white'}} onClick={()=> reset(true)}>Сбросить</button><div className={cs.close} onClick={()=> setVisible(false)}>Закрыть</div>
                </div>
            </div>
        </>
    )
}

export default MenuVisibleParams