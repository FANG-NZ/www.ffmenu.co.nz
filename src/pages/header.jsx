import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import CartContext from '../tools/cartcontext';

import '../scss/header.scss';

class Header extends React.Component{
    static contextType = CartContext;

    constructor(props){
        super(props);

        this.handleOpenCartClicked = this.handleOpenCartClicked.bind(this);
    }

    /**
     * Function is to handle open cart panel button
     * clicked
     */
    handleOpenCartClicked(){
        this.context.openCartPanel();
    }


    render(){
        return (
            <>
            <header id="header" className="light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="module module-logo dark">
                                <h4>KOKORO SUSHI</h4>
                            </div>
                        </div>

                        {/* START col nav */}
                        <div className="col-md-7">
                            <nav className="module module-navigation left mr-4">
                            <HashRouter>
                                <ul id="nav-main" className="nav nav-main">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>  
                                    </li>
                                </ul>
                            </HashRouter>
                            </nav>
                        </div>

                        {/** START col cart */}
                        <div className="col-md-2">
                            <a href="#" onClick={this.handleOpenCartClicked} className="module module-cart right">
                                <span className="cart-icon">
                                    <i className="ti ti-shopping-cart"></i>
                                    <span className="notification">0</span>
                                </span>
                                <span className="cart-value">
                                    $<span className="value">0.00</span>
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </header>
            
            {/** START mobile header */}
            <header id="header-mobile" className="light">
                <div className="module module-nav-toggle">
                    <a href="#" id="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <div className="module module-logo">
                    <h5>KOKORO SUSHI</h5>
                </div>

                <a href="#" className="module module-cart" onClick={this.handleOpenCartClicked}>
                    <i className="ti ti-shopping-cart"></i>
                    <span className="notification" data-cart-qty>2</span>
                </a>

            </header>


            {/** START mobile panel */}
            <nav id="panel-mobile" className="show">
                <div className="module module-logo bg-dark dark">
                    <h1>KOKORO</h1>
                    <button className="close" data-toggle="panel-mobile"><i class="ti ti-close"></i></button>
                </div>
                <nav className="module module-navigation"></nav>
                <div className="module module-social">
                    <h6 className="text-sm mb-3">Follow Us!</h6>
                    <a href="#" className="icon icon-social icon-circle icon-sm icon-facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="icon icon-social icon-circle icon-sm icon-google">
                        <i class="fa fa-google"></i>
                    </a>
                    <a href="#" className="icon icon-social icon-circle icon-sm icon-twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="icon icon-social icon-circle icon-sm icon-youtube">
                        <i class="fa fa-youtube"></i>
                    </a>
                    <a href="#" className="icon icon-social icon-circle icon-sm icon-instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </div>
            </nav>
            </>
        );    
    }


}

export default Header;