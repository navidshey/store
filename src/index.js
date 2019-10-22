import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../src/components/App'
// import './assets/css/main.css'
window.React = React

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('react-container'))
