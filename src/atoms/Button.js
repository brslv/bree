import React from 'react'
import './Button.css'

const Button = (props) => {
    let classNames = 'Atom--Button'

    if (props.className) {
      classNames += ` ${props.className}`
    }

    return <button
      {...props}
      className={classNames}
    >
      {props.children}
    </button>

}

export default Button
