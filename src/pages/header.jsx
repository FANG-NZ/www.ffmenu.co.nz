import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

class Header extends React.Component{

    /**
     * Function is to handle open cart panel button
     * clicked
     */
    handleOpenCartClicked(){
        alert("Yes clicked");
    }


    render(){
        return (
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
        );    
    }


}

export default Header;