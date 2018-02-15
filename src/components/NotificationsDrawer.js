import React, { Component } from 'react'
import './NotificationsDrawer.css'

class NotificationsDrawer extends Component {
  render() {
    return (
      <div className="Component--NotificationsDrawer">
        {this.props.notifications.list.map((notification, index) => {
          return (
            <div key={index}>
              <strong>{notification.content}</strong>
            </div>
          )
        })}
      </div>
    )
  }
}

export default NotificationsDrawer
