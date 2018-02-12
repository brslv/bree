import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={this.props.store}>
          <Router>
            <React.Fragment>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
            </React.Fragment>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
