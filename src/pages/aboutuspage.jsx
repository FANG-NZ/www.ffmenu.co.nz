import React, { Component } from 'react';
import {Transition, animated} from 'react-spring/renderprops';

export default class AboutUsePage extends Component{

    render(){
        const _style = this.props.style;
        
        return(
            <animated.div 
                className="page-animate"
                style={{..._style}}  
            >
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <h1 className="mb-0">About Us Page</h1>
                            <h4 className="text-muted mb-0">We are in ABOUT US PAGE</h4>
                        </div>
                    </div>
                </div>
            </div>
            </animated.div>
        );
    }

}