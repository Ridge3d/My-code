import React, { Component } from 'react';


class Home extends Component {

    render() {
        const bgImg = { backgroundImage: `url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HVFIk0gZeivb57aza/videoblocks-aerial-view-of-abstract-futuristic-binary-city-a-high-tech-background-with-digital-arrays-connected-to-the-global-network-cloud-matrix-seamless-loop-alpha-matte_hbgcjj9mb_thumbnail-full01.png)` }
        let outline = { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }
        return (
            <div className="jumbotron jumbotron-fluid border-dark border-bottom rounded-bottom mb-5" style={bgImg}>
                <div className="container">
                    <h1 className="display-2 text-light text-center" style={outline}>Hello World!</h1>
                    <h2 className="text-center text-light mb-5" style={outline}>- My Journey to Fullstack</h2>
                    <div id="carouselExampleIndicators" className="carousel slide border border-white rounded" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src='http://www.predicate.us/wordpress/wp-content/uploads/2017/01/coding.jpg'  alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="http://techdissected.com/wp-content/uploads/2016/08/Data-Security-Image-1.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://www.fastlane.net/_Resources/Persistent/806a2b8ff49aee1a97bec7c9a9565d1ebf73b884/cybersecurity-2560x1440.jpg" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;