import React, { Component } from 'react'
import LoaderComponent from '../atoms/Loader'

const CanShowLoader = (Wrapped) => {
  return class CanShowLoader extends Component {
    render() {
      return (
        <React.Fragment>
          {this.props.isLoading ? <LoaderComponent /> : null}
          <Wrapped {...this.props} />
        </React.Fragment>
      )
    }
  }
}

export default CanShowLoader 