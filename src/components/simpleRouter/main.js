import React from 'react';
import HomePage from './home';
import AboutPage from './about';
import ContactPage from './contact';
import ErrorPage from './error';
import PostUsingParams from "./postuseParams";
import PostUsingLocation from './postuseLocation';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function MainPage() {
    return (
      <Router basename="/ranjan">
        <div className="MainApp">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route exact path="/post/:id" component={PostUsingParams}></Route>
            <Route exact path="/posts/:id" component={PostUsingLocation}></Route>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
}

export default MainPage;
