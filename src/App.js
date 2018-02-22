import React, { Component } from 'react'
import {
  Provider,
  connect
} from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import PrivateRoute from './components/routing/PrivateRoute'
import GuestRoute from './components/routing/GuestRoute'
import Navigation from './components/navigation/Navigation'
import Loader from './components/Loader'
import NotificationsDrawer from './components/notifications/NotificationsDrawer'
import HomePage from './pages/Home'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import BooksListPage from './pages/books/List'
import BooksAddPage from './pages/books/Add'
import { logout } from './actionCreators/user'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={this.props.store}>
          <Router>
            <React.Fragment>

              {this.props.user ? <Navigation onLogout={this.props.logout} /> : ''}

              <Route exact path="/" user={this.props.user} component={HomePage} />
              <GuestRoute path="/login" user={this.props.user} component={LoginPage} />
              <GuestRoute path="/register" user={this.props.user} component={RegisterPage} />
              <PrivateRoute exact path="/books" user={this.props.user} component={BooksListPage} />
              <PrivateRoute exact path="/books/add" user={this.props.user} component={BooksAddPage} />

              <NotificationsDrawer notifications={this.props.notifications} />
              {this.props.isLoading ? <Loader /> : ''}

            </React.Fragment>
          </Router>
        </Provider>
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
)(App)
