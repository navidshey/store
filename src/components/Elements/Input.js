import React from 'react'

const Input = ({ name, placeholder, type, required, labelName, labelClass, colNumber }) => {
    let parentClass = "";
    switch (colNumber) {
        case "1":
            parentClass = "col-xs-12";
            return;
        case "2":
            parentClass = "col-xs-6";
            return;
        case "3":
            parentClass = "col-xs-4";
            return;
        case "4":
            parentClass = "col-xs-3";
            return;
        case "6":
            parentClass = "col-xs-2";
            return;
        default:
            parentClass = "col-xs-3";
    }
    return (
        <div className={this.parentClass}>
            <label className={labelClass}>{labelName}}</label>
            <input type={type} name={name} placeholder={placeholder} required = {required} />
        </div>
    )
}
export default Input;