import React, { Component } from "react";
import { render } from "react-dom";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(this.state.title);
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
    console.log(this.state.content);
  }

  handleClick(event) {
    let stuff = { title: this.state.title, content: this.state.content };

    fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify(stuff),
      headers: new Headers({ "Content-Type": "application/json" })
    });
  }

  render() {
    return (
      <div className="card d-flex-container w-100 mx-auto mt-3">
        <div className="card-header border-info text-dark text-capitalize">
          <h1 className="text-center">Create Blog Post</h1>
          <div className="card-body text-dark">
            <h4 className="text-left text-dark">Title:</h4>
            <input
              className="form-control input-lg"
              type="text"
              placeholder="Blog Title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <br />
            <h4 className="text-left text-dark">Content:</h4>
            <textarea
              className="form-control input-xlg"
              type="text"
              placeholder="Type your content here."
              rows="10"
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn-lg btn-center btn-secondary mt-3 mb-2 w-25"
          onClick={event => this.handleClick(event)}
        >
          POST
        </button>
      </div>
    );
  }
}

export default Create;
