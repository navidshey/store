import React from 'react'
import general from '../../../utils/general'

const Input = ({ name, placeholder, type, required, label, labelClass, colNumber, handleChange }) => {
    let parentClass = general.getColumnsStyle(colNumber);
    return (
        <div className={parentClass}>
            <label className={labelClass}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} required = {required} onChange={handleChange}/>
        </div>
    )
}
export default Input;