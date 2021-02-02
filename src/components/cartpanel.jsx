import React, {Component, useContext} from 'react';
import { withRouter } from 'react-router-dom';
import CartContext from '../tools/cartcontext';
import FFMenuContext from '../tools/ffmenucontext';

import '../scss/cartpanel.scss';

/**
 * define the cart info block
 */
const CartInfoBlock = (props) => {
    const _cartContext = useContext(CartContext),
          _ffContext = useContext(FFMenuContext);

    /**
     * Function is to handle open popup clicked
     * @param {cart item object} _cartItem 
     */
    function handleOpenPopup(e, _cartItem){
        e.preventDefault();
        _ffContext.mealPopupRef.open(_cartItem);
    }

    return(
        <table className="cart-table">
            <tbody>
                {_cartContext.items.map(
                    (value) => {
                        const _meal = value.meal,
                              _info = value.cart_item;

                        return(
                            <tr key={_meal.id}>
                                <td className="title">
                                    <span className="name">
                                        <a href="#open-popup" 
                                            onClick={(e) => handleOpenPopup(e, _meal)}
                                        >
                                            {_meal.name}
                                        </a>
                                    </span>
                                    <span className="caption text-muted">{_info.unit}</span>
                                </td>
                                <td className="price">${_info.price} X ({_info.qty})</td>
                                <td className="actions">
                                    <a href="#open-popup" className="action-icon"
                                        onClick={(e) => handleOpenPopup(e, _meal)}
                                    >
                                        <i className="ti ti-pencil"></i>
                                    </a>
                                    <a href="#remove" className="action-icon" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            _cartContext.removeItemFromCart(_meal.id);
                                        }}
                                    >
                                        <i className="ti ti-close"></i>
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
    )
}

/**
 * START
 * define the cart summary block
 */
const CartSummaryBlock = (props) => {
    const cartcontext = useContext(CartContext);

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
                    <strong>
                        $<span className="cart-total">
                            {cartcontext.getCartTotal().toFixed(2)}
                        </span>
                    </strong>
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
class CartPanel extends  Component{

    componentDidMount(){
        //component did mount
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
                                            
                                    {/* <NavLink to="/checkout" className="panel-cart-action btn btn-secondary btn-block btn-lg">
                                        <span>Go to checkout</span>
                                    </NavLink> */}
                                    <a href="/checkout" className="panel-cart-action btn btn-secondary btn-block btn-lg"
                                        onClick={(e) => {
                                            e.preventDefault();

                                            cartcontext.closeCartPanel();
                                            ffmenucontext.hideBodyOverlay();

                                            this.props.history.push("/checkout");
                                        }}
                                    >
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

export {CartSummaryBlock, CartEmptyBlock};
export default withRouter(CartPanel);