import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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