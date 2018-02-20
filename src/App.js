import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import GuestRoute from './components/routing/GuestRoute'
import { connect } from 'react-redux'
import Loader from './components/Loader'
import NotificationsDrawer from './components/notifications/NotificationsDrawer'
import { logout } from './actionCreators/user'
import './App.css'

import HomePage from './pages/Home'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import BooksListPage from './pages/books/List'
import BooksAddPage from './pages/books/Add'

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.user ? <button onClick={this.props.logout}>Logout</button> : ''}
        <Provider store={this.props.store}>
          <React.Fragment>
            <Router>
              <React.Fragment>
                <Route exact path="/" component={HomePage} />
                <GuestRoute path="/login" component={LoginPage} />
                <GuestRoute path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/books" component={BooksListPage} />
                <PrivateRoute exact path="/books/add" component={BooksAddPage} />
              </React.Fragment>
            </Router>
            <NotificationsDrawer notifications={this.props.notifications} />
          </React.Fragment>
        </Provider>
        {this.props.isLoading ? <Loader /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    notifications: state.notifications,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout() {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
