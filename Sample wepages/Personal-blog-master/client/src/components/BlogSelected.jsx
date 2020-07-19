import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import AuthorInfo from './AuthorInfo';
import Affiliates from './Affiliates';

class BlogSelected extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        };


    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let url = `/api/blog/${id}`;
        fetch(url)
            .then(res => {
                console.log("1st .then res = ", res);
                return res.json();
            })
            .then(obj => {
                console.log("2nd .then obj = ", obj[0]);
                this.setState({
                    blog: obj[0]
                });
            });
    }

    render() {
        let blog = this.state.blog;
        let tags = 'Tags, go, here, but, these, are, just, a, few, placeholders'
        return (
            <Fragment>
                <div className="col-md-7 mx-auto">
                    <div className="card border border-dark">
                    <div className="card-title card-img-overlay outline text-white"><h1>{blog.title}</h1></div>
                        <img className="card-img-top border-0" src="https://i.ytimg.com/vi/mOD134Dj6-Y/maxresdefault.jpg" alt="Card image cap" />
                        <div className="card-body">
                            
                            <p className="card-text">{blog.content}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mx-auto">
                    <AuthorInfo />
                    <Affiliates />
                </div>
            </Fragment>
        );
    }
}

export default BlogSelected;