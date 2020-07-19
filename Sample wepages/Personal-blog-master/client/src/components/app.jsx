import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogNewPost from './BlogNewPost';
import BlogSelected from './BlogSelected';
import Blogs from './Blogs'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import Login from './auth/login';
import Logout from './auth/logout';
import PrivateRoute from './auth/privateRoute';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <div className="container-fluid" style={{ marginTop: '50px' }}>
                        <NavBar />
                        <div className="row my-5 py-5">
                            <Switch>
                                <Route exact path="/" component={Blogs} />
                                <Route exact path="/blog/:id" component={BlogSelected} />
                                <Route path="/login" component={Login} />
                                <Route path="/logout" component={Logout} />
                                <PrivateRoute exact path="/post/blog" component={BlogNewPost} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;