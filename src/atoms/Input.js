import React from 'react'
import './Input.css'

const Input = (props) => {
  let classNames = `Atom--Input`

  if (props.className) {
     classNames += ` ${props.className}`
  }

  if (props.rounded) {
    classNames += ' rounded'
  }

  return <input
    {...props}
    className={classNames}
  />
}

export default Input
