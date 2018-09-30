import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      backgroundImage:
        "url('http://blog.cambridgeinternational.org/wp-content/uploads/Blog-image_2-700x300.jpg')"
    };

    return (
      <Fragment>
        <header className="header" style={style}>
          <div className="overlay" />
          <div className="container row">
            <div className="col-lg-10 col-md-10 mx-auto text-info">
              <br />
              <div className="site-heading text-light text-center">
                <h1>The Life of a Junior Developer!</h1>
                <span className="subheading">
                  My Journey of Learning How to Code ;)
                </span>
                <br /> <br /> <br /> <br /> <br />
                <div className="card">
                  <div className="card-header bg-info text-white">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 text-center text-info">
                      <p>
                        Learning to write programs stretches your mind, and
                        helps you think better, creates a way of thinking about
                        things that I think is helpful in all domains.
                      </p>
                      <footer className="blockquote-footer text-dark">
                        Bill Gates
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
