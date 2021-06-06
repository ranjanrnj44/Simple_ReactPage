import React , {useState} from 'react';
import HomePage from './home';
import AboutPage from './about';
import ContactPage from './contact';
import ErrorPage from './error';
import PostUsingParams from "./postuseParams";
import PostUsingLocation from './postuseLocation';
import ProfilePage from './profile';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function LoginPage() {

  let [access, setAccess] = useState(false);

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
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
          </ul>

          <button type="button" onClick={() => setAccess(!access)}> {access ? "LogOut" : "Login"} </button>

          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route exact path="/post/:id" component={PostUsingParams}></Route>
            <Route exact path="/posts/:id" component={PostUsingLocation}></Route>
            <Route exact path="/profile" >
              {access ? <ProfilePage/> : <Redirect to="/" />}
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
}

export default LoginPage;
