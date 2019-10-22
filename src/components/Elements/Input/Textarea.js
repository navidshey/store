/* eslint-disable no-unused-vars */
import React from 'react'

const Textarea = ({ name, placeholder, required, label, labelClass, colNumber, handleChange }) => {
  let parentClass = ''
  switch (colNumber) {
    case '1':
      parentClass = 'col-xs-12'
      break
    case '2':
      parentClass = 'col-xs-6'
      break
    case '3':
      parentClass = 'col-xs-4'
      break
    case '4':
      parentClass = 'col-xs-3'
      break
    case '6':
      parentClass = 'col-xs-2'
      break
    default:
      parentClass = 'col-xs-3'
  }
  return (
    <div className={parentClass}>
      <label className={labelClass}>{label}</label>
      <textarea name={name} placeholder={placeholder} required = {required} onChange={handleChange}/>
    </div>
  )
}
export default Textarea
