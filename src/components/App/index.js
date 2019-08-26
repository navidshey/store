import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {withRouter} from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faSearch, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Home from '../Home';
import Header from '../Header'
import Navbar from '../Header/na'
import Footer from '../Footer'
import Contact from '../Contact'

library.add(faShoppingBag, faSearch, faChevronRight, faChevronLeft)

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/article/:id" component={Article} />
            <Route path="/login" component={Login} /> */}
          </div>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default withRouter(App);