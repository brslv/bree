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
import HomePage from './pages/Home'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import BooksListPage from './pages/books/List'
import BooksAddPage from './pages/books/Add'
import BooksEditPage from './pages/books/Edit'
import BooksWritePage from './pages/books/Write'
import { logout } from './actionCreators/user'
import CanShowLoader from './HOC/CanShowLoader'
import CanShowConfirmations from './HOC/CanShowConfirmations'
import CanShowNotifications from './HOC/CanShowNotifications'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={this.props.store}>
          <Router>
            <React.Fragment>

              {this.props.user ? <Navigation username={this.props.user.username} onLogout={this.props.logout} /> : null}

              <Route exact path="/" user={this.props.user} component={HomePage} />
              <GuestRoute path="/login" user={this.props.user} component={LoginPage} />
              <GuestRoute path="/register" user={this.props.user} component={RegisterPage} />
              <PrivateRoute exact path="/books" user={this.props.user} component={BooksListPage} />
              <PrivateRoute exact path="/books/add" user={this.props.user} component={BooksAddPage} />
              <PrivateRoute exact path="/books/:id/edit" user={this.props.user} component={BooksEditPage} />
              <PrivateRoute exact path="/books/:id/write" user={this.props.user} component={BooksWritePage} />

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
    confirmation: state.confirmation,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout() {
      dispatch(logout())
    }
  }
}

const WrappedApp = 
  CanShowNotifications(
    CanShowConfirmations(
      CanShowLoader(
        App
      )
    )
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedApp)
