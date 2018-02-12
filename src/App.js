import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Books from './pages/Books'
import Loader from './components/Loader'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={this.props.store}>
          <Router>
            <React.Fragment>
              <Route exact path="/" component={Home} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </React.Fragment>
          </Router>
        </Provider>
        {this.props.isLoading ? <Loader /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
