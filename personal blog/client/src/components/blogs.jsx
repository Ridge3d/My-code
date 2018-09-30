import React, { Component } from "react";
import SingleBlog from "./singleblog";
import Create from "./createblogpost";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3002/api/blogs")
      .then(res => res.json())
      .then(obj => this.setState({ blogList: object }));
  }

  handleList(value) {
    let newList = [...this.state.blogList];
    if (value === "") {
      console.log("yes");
    } else {
      newList.push(value);
      this.setState({ blogList: newList });
    }
  }
  render() {
    return (
      <div>
        <Create handlePostBlog={text => this.handleList(text)} />
        <SingleBlog list={this.state.blogList} />
      </div>
    );
  }
}

export default Blogs;
