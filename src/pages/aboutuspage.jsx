import React, { Component } from 'react';
import {animated} from 'react-spring/renderprops';

import bgImage from '../images/about-us-bg.jpg';

export default class AboutUsePage extends Component{

    render(){
        const _style = this.props.style;
        
        return(
            <animated.div 
                className="page-animate"
                style={_style}
            >
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <h1 className="mb-0">About Us</h1>
                            <h4 className="text-muted mb-0">We provide the best for you</h4>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section section-bg-edge">

                <div className="image left bottom col-md-7">
                    <div className="bg-image">
                        <img src={bgImage} alt="" />
                    </div>
                </div>

            <div className="container">
                <div className="col-lg-5 offset-lg-5 col-md-9 offset-md-3">
                    <div className="rate mb-5 rate-lg">
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                    </div>
                    <h2>The best food in Hamilton</h2>
                    <p className="">
                        Kokoro Sushi has been passionately committed since our beginning to being 
                        unlike any other sushi experience available. Our progressive approach to sushi 
                        pays homage to the artisanal beauty of traditional sushi, while also pushing the 
                        boundaries by combining sushi with other global cuisines and flavor profiles
                    </p>
                    <p>
                        We strive to be different, and we have a unique vision of what sushi can be. 
                        We don’t just do the common rolls, we do rolls our way
                    </p>
                    <h6>Team of KOKORO SUSHI</h6>
                    
                </div>
            </div>

            </section>
            </animated.div>
        );
    }

}