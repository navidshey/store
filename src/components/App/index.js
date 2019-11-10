/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingBag,
  faSearch,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Contact';
import CourseList from '../Courses/List';
import Detail from '../Courses/Detail';

library.add(faShoppingBag, faSearch, faChevronRight, faChevronLeft);

const App = () => {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/courses" component={CourseList} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/article/:id" component={Article} />
          <Route path="/login" component={Login} /> */}
      </Switch>
      <Footer></Footer>
    </>
  );
};

export default withRouter(App);
