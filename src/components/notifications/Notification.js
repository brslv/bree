import React from 'react'
import './Notification.css'

const Notification = (props) => {
  return (
    <div className={['Component--Notification', props.className].join(' ')}>
      <span>{props.content}</span>
    </div>
  )
}

export default Notification
