import React, {Component} from 'react';
import {StickyContainer, Sticky} from 'react-sticky-17';

import CartContext from '../tools/cartcontext';
import bannerImage from '../images/checkoutpage-bg.jpg'
import '../scss/checkoutpage.scss';

export default class CheckoutPage extends Component{


    render(){
        return(
            <CartContext.Consumer>
                {(cartcontext) => {

                    return(
                        <>
                            <div className="page-title bg-dark dark">
                                <div className="bg-image bg-parallax">
                                    <img src={bannerImage} alt="banner bg" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-4">
                                            <h1 className="mb-0">Checkout</h1>
                                            <h4 className="text-muted mb-0">Enjoy your meal with us</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}