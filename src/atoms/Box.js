import React from 'react'
import './Box.css'

const Box = props => {
  let classNames = 'Component--Box'

  if (props.className) {
    classNames += ` ${props.className}`
  }

  return (
    <div
      {...props}
      className={classNames}
    >
      {props.children}
    </div>
  )
}

export default Box
