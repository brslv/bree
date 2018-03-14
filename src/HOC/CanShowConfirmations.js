import React, { Component } from 'react'
import Confirmation from '../atoms/Confirmation'

const CanShowConfirmations = (Wrapped) => { 
  return class CanShowConfirmations extends Component {
    render() {
      return (
        <React.Fragment>
          {
            this.props.confirmation
            ?
            <Confirmation onConfirm={this.props.confirmation.onConfirm}>
              {this.props.confirmation.text}
            </Confirmation>
            : null
          }
          <Wrapped {...this.props} />
        </React.Fragment>
      )
    }
  }
}

export default CanShowConfirmations 