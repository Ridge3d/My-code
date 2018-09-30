import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FrontPage from "./frontpage";
import PostPage from "./postpage";
import PrivateRoute from "./auth/privateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import AuthButton from "./auth/authButton";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <AuthButton />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/post" component={PostPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Navigation;
