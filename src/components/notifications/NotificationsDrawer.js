import React, { Component } from 'react'
import './NotificationsDrawer.css'
import Notification from './Notification'

class NotificationsDrawer extends Component {
  render() {
    return (
      <div className="Component--NotificationsDrawer">
        {this.props.notifications.map((notification, index) => (
            <Notification className="accent" key={index} content={notification.content} />
        ))}
      </div>
    )
  }
}

export default NotificationsDrawer
