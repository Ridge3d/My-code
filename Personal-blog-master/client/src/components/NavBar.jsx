import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class NavBar extends Component {

    render() {

        let outline = { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }
        return (
            <nav className="
                navbar 
                navbar-expand-lg 
                fixed-top 
                border-dark
                border-bottom 
                rounded-bottom" 
                id="mainNav"
                style={{backgroundColor: 'rgba(1, 1, 1, 0.9)'}}
                >
                <div className="container-fluid"  >
                    <a className="navbar-brand text-light" style={outline} href="index.html">Matthew Aderhold</a>
                    <button className="navbar-toggler navbar-toggler-right bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                         <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-light" style={outline}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link text-light" style={outline}></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" style={outline} to="/post/blog">New Post</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" style={outline} href="contact.html">Contact</a>
                            </li>
                            <li className="nav-item">
                                <AuthButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;