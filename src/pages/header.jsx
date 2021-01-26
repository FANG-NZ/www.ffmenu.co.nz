import React from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../tools/cartcontext';
import FFMenuContext from '../tools/ffmenucontext';

import '../scss/header.scss';


/**
 * Define the nav block component
 */
const NavBlock = (props)=> {

    const _className = "nav " + ((props.is4Mobile)? "nav-main-mobile" : "nav-main");

    return(
        <ul className={_className}>
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
    )
}



class Header extends React.Component{
    static contextType = CartContext;

    //define the state
    state = {
        isMobilePanelShown: false
    }

    constructor(props){
        super(props);

        this.handleOpenCartClicked = this.handleOpenCartClicked.bind(this);
        this.handleCloseMobilePanel = this.handleCloseMobilePanel.bind(this);
    }

    /**
     * Function is to handle open cart panel button
     * clicked
     */
    handleOpenCartClicked(ffmenucontext){

        
        if(!this.context.canShowCartPanel()){
            console.log("CANNOT SHOW CART PANEL");
            return;
        }

        //call context function
        this.context.openCartPanel();

        ffmenucontext.showBodyOverlay(()=>{
            this.context.closeCartPanel();
            ffmenucontext.hideBodyOverlay();
        });
    }


    /**
     * Function is to handle open mobile panel
     */
    handleOpenMobilePanelClicked(context){
        this.setState({isMobilePanelShown : true});

        //To show body overlay
        context.showBodyOverlay(()=>{
            this.handleCloseMobilePanel(context);
        });
    }

    /**
     * Function is to handle close mobile panel
     * @param {*} context 
     */
    handleCloseMobilePanel(context){
        this.setState({isMobilePanelShown : false})

        //call context to hide body overlay
        context.hideBodyOverlay();
    }


    render(){
        return (
            <FFMenuContext.Consumer>
                {(ffmenucontext) => {
                    return(
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
                                        
                                            <NavBlock is4Mobile={false} />
                                        
                                        </nav>
                                    </div>

                                    {/** START col cart */}
                                    <div className="col-md-2">
                                        <a href="#open-cartpanel" 
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                this.handleOpenCartClicked(ffmenucontext)}
                                            } 
                                            className="module module-cart right"
                                        >
                                            <span className="cart-icon">
                                                <i className="ti ti-shopping-cart"></i>
                                                <span className="notification">
                                                    {this.context.getCartItemNumber()}
                                                </span>
                                            </span>
                                            <span className="cart-value">
                                                $<span className="value">{this.context.getCartTotal().toFixed(2)}</span>
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </header>
            
                        {/** START mobile header */}
                        <header id="header-mobile" className="light">
                            <div className="module module-nav-toggle">
                                <a href="#open-leftpanel" id="nav-toggle" 
                                    onClick={(e)=> {
                                        e.preventDefault();
                                        this.handleOpenMobilePanelClicked(ffmenucontext)
                                    }}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>

                            <div className="module module-logo">
                                <h5>KOKORO SUSHI</h5>
                            </div>

                            <a href="#open-cartpanel" className="module module-cart" 
                                onClick={(e)=> {
                                    e.preventDefault();
                                    this.handleOpenCartClicked(ffmenucontext)
                                }}>
                                <i className="ti ti-shopping-cart"></i>
                                <span className="notification" data-cart-qty>
                                    {this.context.getCartItemNumber()}
                                </span>
                            </a>
                        </header>


                        {/** START mobile panel */}
                        <nav id="panel-mobile" className={(this.state.isMobilePanelShown) ? 'show':''}>
                            <div className="module module-logo bg-dark dark">
                                <h1>KOKORO</h1>

                                <button className="close"
                                    onClick={() => this.handleCloseMobilePanel(ffmenucontext)}
                                >
                                    <i className="ti ti-close"></i>
                                </button>
                            </div>

                            {/** START mobile nav items */}
                            <nav className="module module-navigation">
                                <NavBlock is4Mobile={true} />
                            </nav>

                            <div className="module module-social">
                                <h6 className="text-sm mb-3">Follow Us!</h6>
                                <a href="#facebook" className="icon icon-social icon-circle icon-sm icon-facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#google" className="icon icon-social icon-circle icon-sm icon-google">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="#twitter" className="icon icon-social icon-circle icon-sm icon-twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </div>
                        </nav>
                        </>
                    )
                }}
            
            </FFMenuContext.Consumer>
        );    
    }


}

export default Header;