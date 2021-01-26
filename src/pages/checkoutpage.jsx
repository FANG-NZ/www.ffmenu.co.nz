import React, {useEffect, useContext} from 'react';
import {StickyContainer, Sticky} from 'react-sticky-17';

import CartContext from '../tools/cartcontext';
import bannerImage from '../images/checkoutpage-bg.jpg'
import '../scss/checkoutpage.scss';


/**
 * defien the cart item block
 */
const CartItemBlock = (props)=>{
    const _meal = props.meal,
          _cartInfo = props.cartInfo;

    return(
        <tr key={_cartInfo.mid}>
            <td className="title">
                <span className="name">
                    <a href="#product-modal">{_meal.name}</a>
                </span>
                <span className="caption text-muted">{_cartInfo.unit}</span>
            </td>
            <td className="price">${_cartInfo.price.toFixed(2)}</td>
            <td className="actions">
                <a href="#product-modal" className="action-icon">
                    <i className="ti ti-pencil"></i>
                </a>
                <a href="#" className="action-icon">
                    <i className="ti ti-close"></i>
                </a>
            </td>
        </tr>
    )
}


/**
 * define the Checkout Page
 */
const CheckoutPage = () =>{
    const _cartcontext = useContext(CartContext);

    //defien the useEffect HOOKS
    useEffect(()=>{

        //To call disable cart panel
        _cartcontext.disableShowCartPanel();

        //defien the cleanup function
        return function cleanup(){
            //To enable cart panel
            _cartcontext.enableShowCartPanel();
        }

    })

    
    return(
        <>
        {/** SATRT page title */}
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

        {/** START page content */}
        <section className="section bg-light">

            <div className="container">
                <div className="row">

                    {/** START left panel */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="cart-details shadow bg-white stick-to-content mb-4">
                            <div className="bg-dark dark p-4">
                                <h5 className="mb-0">You order</h5>
                            </div>

                            <table className="cart-table">
                                <tbody>

                                {_cartcontext.items.map(
                                    (value) => {
                                        return <CartItemBlock meal={value.meal} cartInfo={value.cart_item} />
                                    }
                                )}
                                
                                </tbody>
                            </table>

                            <div class="cart-summary">
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Order total:</div>
                                    <div class="col-5"><strong>$<span class="cart-products-total">0.00</span></strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Devliery:</div>
                                    <div class="col-5"><strong>$<span class="cart-delivery">0.00</span></strong></div>
                                </div>
                                <hr class="hr-sm" />
                                <div class="row text-lg">
                                    <div class="col-7 text-right text-muted">Total:</div>
                                    <div class="col-5"><strong>$<span class="cart-total">0.00</span></strong></div>
                                </div>
                            </div>
                            <div class="cart-empty">
                                <i class="ti ti-shopping-cart"></i>
                                <p>Your cart is empty...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-7 order-lg-first">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic informations</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Surename:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Street and number:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>City:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Delivery</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Delivery time:</label>
                                    <div class="select-container">
                                        <select class="form-control">
                                            <option>As fast as possible</option>
                                            <option>In one hour</option>
                                            <option>In two hours</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Payment</h4>
                            <div class="row text-lg">
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input" />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">PayPal</span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input" />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Credit Card</span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input" />
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Cash</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg"><span>Order now!</span></button>
                        </div>
                    </div>
                </div>
            </div>
</section>
        </>
    )
}

export default CheckoutPage;