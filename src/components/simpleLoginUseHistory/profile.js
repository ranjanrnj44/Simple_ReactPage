import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import ViewProfile from './profile_ViewProfile';
import EditProfile from './profile_EditProfile';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function ProfilePage({ loginProp }) {
  let history = useHistory();
  
  console.log(useHistory());

  useEffect(() => {
    if (!loginProp) {
      history.push("/");
    }
  }, [loginProp, history]);

  console.log(useRouteMatch());
  
    let { path, url } = useRouteMatch();
  return (
      <div>
        <h1>Profile Page</h1>
        <h3>Welcome mate!, have a great day</h3>
        <p>this is accessible for you alone</p>
        <hr /> 

        <Router>
            <div>
            <ul>
                <li>
                    <Link to={`${url}/viewprofile`}>View your Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${path}/viewprofile`} component={ViewProfile}></Route>
                <Route exact path={`${path}/editprofile`} component={EditProfile}></Route>
            </Switch>
            </div>
        </Router>
    </div>
  );
}

export default ProfilePage;
