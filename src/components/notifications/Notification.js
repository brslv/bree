import React from 'react'
import './Notification.css'

const Notification = ({ content }) => {
  return (
    <div className="Component--Notification accent">
      <span>{content}</span>
    </div>
  )
}

export default Notification
