import React from 'react'
import './Notification.css'

const Notification = ({ content }) => {
  return (
    <div className="Component--Notification">
      <span>{content}</span>
    </div>
  )
}

export default Notification
