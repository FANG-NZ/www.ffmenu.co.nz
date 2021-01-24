import React, {Component} from 'react';
import CartContext from '../tools/cartcontext';
import FFMenuContext from '../tools/ffmenucontext';

/**
 * define the cart info block
 */
const CartInfoBlock = () => {

    return(
        <table className="cart-table">
            <tbody>
            <tr>
                <td className="title">
                    <span className="name">
                        <a href="#product-modal" data-toggle="modal">Beef Burger</a>
                    </span>
                    <span className="caption text-muted">Large (500g)</span>
                </td>
                <td className="price">$9.00</td>
                <td className="actions">
                    <a href="#product-modal" data-toggle="modal" className="action-icon">
                        <i className="ti ti-pencil"></i>
                    </a>
                    <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="title">
                    <span className="name">
                        <a href="#product-modal" data-toggle="modal">Extra Burger</a>
                    </span>
                    <span className="caption text-muted">Small (200g)</span>
                </td>
                <td className="price text-success">$9.00</td>
                <td className="actions">
                    <a href="#product-modal" data-toggle="modal" className="action-icon">
                        <i className="ti ti-pencil"></i>
                    </a>
                    <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

/**
 * START
 * define the cart summary block
 */
const CartSummaryBlock = () => {

    return(
        <div className="cart-summary">
            {/* <div className="row">
                <div className="col-7 text-right text-muted">Order total:</div>
                <div className="col-5">
                    <strong>$<span className="cart-products-total">0.00</span></strong>
                </div>
            </div>
            <div className="row">
                <div className="col-7 text-right text-muted">Devliery:</div>
                <div className="col-5">
                    <strong>$<span className="cart-delivery">0.00</span></strong>
                </div>
            </div>
            <hr className="hr-sm" /> */}
            <div className="row text-lg">
                <div className="col-7 text-right text-muted">Total:</div>
                <div className="col-5">
                    <strong>$<span className="cart-total">0.00</span></strong>
                </div>
            </div>
        </div>
    )
}


/**
 * START
 * define the cart empty block
 */
const CartEmptyBlock = () => {

    return(
        <div className="cart-empty" style={{display : "block"}}>
            <i className="ti ti-shopping-cart"></i>
            <p>Your cart is empty...</p>
        </div>
    )
}



/**
 * START
 * the cart panel component
 */
export default class CartPanel extends  Component{


    componentDidMount(){
        


    }

    render(){

        return(
            <FFMenuContext.Consumer>
                {(ffmenucontext) => (
                    <CartContext.Consumer>
                        {(cartcontext) => {
                            return(
                                <div id="panel-cart" className={(cartcontext.isCartPanelShown)?'show':''}>
                                    <div className="panel-cart-container">
                                        <div className="panel-cart-title">
                                            <h5 className="title">Your Cart</h5>
        
                                            {/** Add click event into close button */}
                                            <button className="close"
                                                onClick={()=> {
                                                    cartcontext.closeCartPanel();
                                                    ffmenucontext.hideBodyOverlay();
                                                }}
                                            >
                                                <i className="ti ti-close"></i>
                                            </button>
        
                                        </div>
        
                                        <div className="panel-cart-content cart-details">
                                            
        
                                            {cartcontext.isCartEmpty()
                                                ? <CartEmptyBlock />
                                                : <>
                                                    <CartInfoBlock />
                                                    <CartSummaryBlock />
                                                  </>
                                            }
                                            
                                        </div>
                                    </div>
        
                                    <a href="#test" className="panel-cart-action btn btn-secondary btn-block btn-lg">
                                        <span>Go to checkout</span>
                                    </a>
                                </div>   
                            )
                        }}   
                    </CartContext.Consumer>
                )}     
            </FFMenuContext.Consumer>
        );
    }

}