import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {withRouter} from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faSearch} from '@fortawesome/free-solid-svg-icons'
import Home from '../Home';

library.add(faShoppingBag, faSearch)

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