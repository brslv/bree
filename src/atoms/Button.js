import React from 'react'
import './Button.css'

const Button = (props) => {
  const classNames = props.classNames
    ? [
      'Atom--Button',
      ...props.className
    ]
    : ['Atom--Button']

  if (props.rounded) {
    classNames.push('rounded')
  }

  if (props.strokeOnly) {
    classNames.push('stroke-only')
  }

  return <button {...props} className={classNames.join(' ')}>{props.children}</button>
}

export default Button
