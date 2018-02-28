import React from 'react'
import './EmptyPageMessage.css'

const EmptyPageMessage = (props) => {
  let className = 'Component--EmptyPageMessage'

  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  )
}

export default EmptyPageMessage
