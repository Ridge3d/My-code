import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        let url = `/api/blog/`;
        // if (this.props.match.params.id) {
        //   return (url = `/api/chirps/${this.props.match.params.id}`);
        // }
        fetch(url)
            .then(res => {
                // console.log("1st .then res = ", res);
                return res.json();
            })
            .then(obj => {
                // console.log("2nd .then obj = ", obj);
                let listBlogs = Object.keys(obj).map(id => {
                    // console.log(`obj[${id}.text = ]`, obj[id].text);
                    let blog = obj[id]
                    let description = `${blog.content.substring(0, 25)}...`
                    let style = {width: '25rem'}
                    return (
                        <div key={blog.id} className="col-md-4">
                            <div className="card border border-dark rounded mx-auto" style={style}>
                            <img className="card-img-top" src={'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/27503625_1826562950971048_5633044519166377623_o.jpg?oh=fc70ff500362c8744d5ccc92cf089ef4&oe=5ADC0002'} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{description}</p>
                                <Link to={`/blog/${blog.id}`} className="btn btn-primary">Read more -></Link>
                            </div>
                        </div>
                        </div>
                        

                    );
                });
                this.setState({ blogs: listBlogs });
            });
    }

    render() {
        return <Fragment>{this.state.blogs}</Fragment>;
    }
}

export default Blogs;