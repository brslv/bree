import React from 'react'
import './Form.css'

const Form = (props) => {
  let className = 'Atom--Form'
  if (props.className) {
    className += ` ${props.className}`
  }
  
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default Form
