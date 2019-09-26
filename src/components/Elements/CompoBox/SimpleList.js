import React from 'react'

const SimpleList = ({ title, list, name}) => {
    return (
        <select name={name}  className="jquery-select">
        <option>{title}</option>
        {
            list.map(item => {
                return (
                    <option value={item.value} key={item.value}>{item.title}</option>
                )
            })
        }
    </select>
    )
}
export default SimpleList;