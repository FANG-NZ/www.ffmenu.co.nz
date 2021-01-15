import React from 'react';

class Header extends React.Component{


    render(){
        return (
            <header id="header" className="light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="module module-logo dark">
                                <a href="index.html">
                                    <img src="assets/img/logo-light.svg" alt="" width="88"></img>
                                </a>
                            </div>
                        </div>

                        {/* START col */}

                        <div className="col-md-7">
                            <nav className="module module-navigation left mr-4">
                                <ul id="nav-main" className="nav nav-main">
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );    
    }


}

export default Header;