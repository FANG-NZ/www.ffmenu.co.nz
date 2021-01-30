import React, { Component } from 'react';
import {animated} from 'react-spring/renderprops';

export default class ContactPage extends Component{

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
                            <h1 className="mb-0">Contact Us</h1>
                            <h4 className="text-muted mb-0">(9:30 - 15:30 Mon - Sat)</h4>
                        </div>
                    </div>
                </div>
            </div>

            <section class="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 offset-lg-1 col-md-6 mb-5 mb-md-0">
                            {/* <img src="assets/img/logo-horizontal-dark.svg" alt="" class="mb-5" width="130" /> */}
                            <h4 className="mb-0">KOKORO SUSHI</h4>
                            <span className="text-muted">2B Gordonton Road, Hamilton</span>
                            <hr className="hr-md" />
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <h6 className="mb-1 text-muted">Phone:</h6>
                                    +64 856 1234
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-1 text-muted">E-mail:</h6>
                                    <a href="mailto:hello@kokorosushi.co.nz">hello@kokorosushi.co.nz</a>
                                </div>
                            </div>
                            <hr className="hr-md" />
                            <h6 className="mb-3 text-muted">Follow Us!</h6>
                            <a href="#" className="icon icon-social icon-circle icon-sm icon-facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </div>

                        <div className="col-lg-5 offset-lg-2 col-md-6">
                            <div className="google-map h-500 shadow" data-lat="50.064651" data-lon="19.944981"></div>
                        </div>
                    </div>
                </div>
            </section>
            </animated.div>
        );
    }

}