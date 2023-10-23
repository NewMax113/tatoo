import React, { useRef } from 'react'
import style from './input.module.css'


function Input({ className, onChange }) {
    let ref = useRef('')
    
    function a(e) {
        ref = e.target.value
        console.log(ref)
        return ref
    }

    return (
        <>
        <input
            ref={ref}
            onChange={e => onChange(a(e))}
            className={style.st}
            type='search'
            placeholder='Поиск...'
        >
        </input>
        </>
        
    )
}

export default Input