import React from 'react'
import Select from './Select'
import SelectCheckbox from './SelectCheckbox'
import Input from './Input'
import { useState } from 'react'
import cs from './Menu.module.css'

const MenuVisibleParams = ({ className, sort_plus, search }) => {
    let [visible, setVisible] = useState(false)
    return (
        <>
            <button style={{background: 'red'}} onClick={() => setVisible(!visible)}>Показать</button>
            <div className={visible == true ? cs.vis : cs.novis}>
                <div>
                    <Select obj={
                        [{ value: 'name+', text: 'А-Я' }, { value: 'name-', text: 'Я-А' }]}
                        onChange={(target) => sort_plus(target)}
                        className={''}
                        defaultValue={'Сортировка по'}
                    />
                </div>
                <div>
                    <SelectCheckbox obj={
                        [{ value: 'Первый', text: 'Первый' }, { value: 'Второй', text: 'Второй' }, { value: 'Третий', text: 'Третий' }, { value: 'Четвертый', text: 'Четвертый' }]}
                        className={''}
                        defaultValue={'Фильтр по'}
                    />
                </div>
                <div>
                    <Input
                        className={''}
                        onChange={(input_text) => search(input_text)}
                    />
                </div>
            </div>
        </>
    )
}

export default MenuVisibleParams