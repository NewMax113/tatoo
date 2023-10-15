import React, { useRef } from 'react'



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
            className={className}
        >
        </input>
        </>
        
    )
}

export default Input