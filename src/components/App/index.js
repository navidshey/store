import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {withRouter} from 'react-router';
import Home from '../Home';


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/article/:id" component={Article} />
            <Route path="/login" component={Login} /> */}
          </div>
        </Router>
      </div>
    );
  }
}
 
export default withRouter(App);