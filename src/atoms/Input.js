import React from 'react'
import './Input.css'

const Input = (props) => {
  const classNames = props.classNames
    ? [
      'Atom--Input',
      ...props.className
    ]
    : ['Atom--Input']

  if (props.rounded) {
    classNames.push('rounded')
  }

  return <input {...props} className={classNames.join(' ')} />
}

export default Input
