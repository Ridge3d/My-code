import React, { Component, Fragment } from 'react';

class Affiliates extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card mt-3 border border-dark">
                <div className="card-header">
                    <h5 className="text-center">Affiliates</h5>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <ul className="fa-ul">
                            <li><span className="fa-li text-muted"><i className="fas fa-globe" /></span><a href="https://covalence.io/" className="text-muted">Covalence.io</a></li>
                            <li><span className="fa-li text-muted"><i className="fas fa-globe" /></span><a href="#" className="text-muted">placeholder</a></li>
                            <li><span className="fa-li text-muted"><i className="fas fa-globe" /></span><a href="#" className="text-muted">placeholder</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Affiliates;