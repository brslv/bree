import React, { Component } from 'react'
import NotificationsDrawer from '../components/notifications/NotificationsDrawer'

const CanShowNotifications = (Wrapped) => {
  return class CanShowNotifications extends Component {
    render() {
      return(
        <React.Fragment>
          <NotificationsDrawer notifications={this.props.notifications} />
          <Wrapped {...this.props} />
        </React.Fragment>
      )
    }
  }
}

export default CanShowNotifications