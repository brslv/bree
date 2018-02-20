import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navigation from '../../components/navigation/Navigation'

class Add extends Component {
  render() {
    return (
      <div className="Page--Books">
        <Navigation />
        <h1>Books Add page</h1>
      </div>
    );
  }
}

export default Add
