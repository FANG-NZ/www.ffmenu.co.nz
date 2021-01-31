import React, {useEffect, useContext} from 'react';
import { NavLink, Route, useRouteMatch, useHistory} from 'react-router-dom';
import {StickyContainer, Sticky} from 'react-sticky-17';
import {useForm} from 'react-hook-form';
import {animated} from 'react-spring/renderprops';

import ConfirmationPage from './confirmationpage';
import CartContext from '../tools/cartcontext';
import bannerImage from '../images/checkoutpage-bg.jpg'

import {CartSummaryBlock, CartEmptyBlock} from '../components/cartpanel';

import '../scss/checkoutpage.scss';
import FFMenuContext from '../tools/ffmenucontext';


/**
 * defien the cart item block
 * We use new item, not from CartPanel, because we can design different
 * template here to represent cart item
 */
const CartItemBlock = (props)=>{
    const _meal = props.item.meal,
          _cartInfo = props.item.cart_item,
          _ffcontext = useContext(FFMenuContext),
          _cartcontext = useContext(CartContext);

    const _subtotal = _cartInfo.price * _cartInfo.qty;

    /**
     * Function is to handle open popup clicked
     * @param {} e 
     * @param {*} _cartItem 
     */
    function handleOpenPopup(e, _cartItem){
        e.preventDefault();
        _ffcontext.mealPopupRef.current.open(_cartItem);
    }


    /**
     * Function is to handle remove item
     * @param {*} e 
     * @param {*} _meal 
     */
    function handleRemoveItem(e, _meal){
        e.preventDefault();
        _cartcontext.removeItemFromCart(_meal.id);
    }

    return(
        <tr>
            <td className="title">
                <span className="name">
                    <a href="#open-popup" 
                        onClick={(e) => handleOpenPopup(e, _meal)}
                    >
                        {_meal.name}
                    </a>
                </span>
                <span className="caption text-muted">
                    {_cartInfo.comments}
                </span>
            </td>
            <td className="price">
                ${_subtotal.toFixed(2)} 
                <span className="text-muted">({_cartInfo.qty} Qty)</span>
            </td>
            <td className="actions">
                <a href="#open-popup" className="action-icon"
                    onClick={(e) => handleOpenPopup(e, _meal)}
                >
                    <i className="ti ti-pencil"></i>
                </a>
                <a href="#remove" className="action-icon"
                    onClick={(e) => handleRemoveItem(e, _meal)}
                >
                    <i className="ti ti-close"></i>
                </a>
            </td>
        </tr>
    )
}


/**
 * Defien the empty block for left panel
 */
const LeftEmptyBlock = () => {

    return(
        <div className="row">
            <div className="col-12">
                <span className="icon icon-xl icon-warning">
                    <i className="ti ti-alert"></i>
                </span>
                <h1 className="mb-2">You don't have anything here yet</h1>
                <h4 className="text-muted mb-5">Please add something you like</h4>

                <NavLink to="/" className="btn btn-outline-secondary">
                    <span>Go back to menu</span>
                </NavLink>
            </div>
        </div>
    )
}


/**
 * define the form block for left panel
 */
const LeftFormBlock = () => {
    const {register, handleSubmit, errors, reset} = useForm();
    const _history = useHistory();

    /**
     * Function is to handle form submit request
     * @param {array} data 
     */
    function OnFormSubmit(data){

        console.log(data);
    
        
        reset();
        _history.push("/checkout/confirmation");
    }

    return(
        <form onSubmit={handleSubmit(OnFormSubmit)}>
        <div className="bg-white p-4 p-md-5 mb-4">
            <h4 className="border-bottom pb-4">
                <i className="ti ti-user mr-3 text-primary"></i>
                Basic informations
            </h4>

            <div className="row mb-5">
                <div className="form-group col-sm-6">
                    <label>Name(*):</label>
                    <input type="text" name="firstName" className="form-control" 
                        ref={register({required: true})}
                        defaultValue="First name"
                    />
                    {errors.firstName && 
                        <span className="error text-danger">Please enter your First Name</span>
                    }
                </div>
                <div className="form-group col-sm-6">
                    <label>Surname(*):</label>
                    <input type="text" name="surname" className="form-control" 
                        ref={register({required: true})}
                        defaultValue="Surname"
                    />
                    {errors.surname && 
                        <span className="error text-danger">Please enter your Surname</span>
                    }
                </div>
                
                <div className="form-group col-sm-6">
                    <label>Phone number:</label>
                    <input type="text" name="phone" className="form-control" 
                        ref={register}
                    />
                </div>
                <div className="form-group col-sm-6">
                    <label>E-mail address(*):</label>
                    <input className="form-control" type="email" name="email" 
                        ref={register({
                            required: "Please enter your email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                            }
                        })}
                        defaultValue="test@test.com"  
                    />
                    {errors.email && <span className="error text-danger">{errors.email.message}</span>}
                </div>
            </div>

            <h4 className="border-bottom pb-4">
                <i className="ti ti-package mr-3 text-primary"></i>Pickup
            </h4>
            <div className="row mb-5">
                <div className="form-group col-sm-6">
                    <label>Pickup time:</label>
                    <div className="select-container">

                        <select name="pickup" ref={register} className="form-control">
                            <option value="1">As fast as possible</option>
                            <option value="2">In one hour</option>
                            <option value="3">In two hours</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

        <div className="text-center">
            <button className="btn btn-primary btn-lg">
                <span>Order now!</span>
            </button>
        </div>
        </form>
    )
}


/**
 * define the main body of checkout page
 */
const MainBody = (props) => {
    const _cartcontext = useContext(CartContext);
    const _isCartEmpty = _cartcontext.isCartEmpty();
    const _style = props.style;

    return(
        <animated.div 
            className="page-animate"
            style={_style}  
        >
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
        <StickyContainer>
            <div className="container">
                <div className="row">

                    {/** START left panel */}
                    <div className="col-xl-4 col-lg-5 stick-holder">

                    <Sticky>{
                        ({style}) => 
                            <div className="cart-details shadow bg-white stick-to-content mb-4" style={style}>
                                <div className="bg-dark dark p-4">
                                    <h5 className="mb-0">You order</h5>
                                </div>

                                {/** Check if cart is empty */}
                                {_isCartEmpty
                                    ? <CartEmptyBlock />
                                    : <>
                                        <table className="cart-table checkout-cart-table">
                                            <tbody>

                                            {_cartcontext.items.map(
                                                (value) => {
                                                    return <CartItemBlock key={value.mid} item={value} />
                                                }
                                            )}
                                            
                                            </tbody>
                                        </table>    
                                        <CartSummaryBlock />
                                    </>
                                }

                            </div>
                        }</Sticky>
                    </div>
                    

                    {/** START right panel */}
                    <div className="col-xl-8 col-lg-7 order-lg-first">
                        {_isCartEmpty
                            ? <LeftEmptyBlock />
                            : <LeftFormBlock />
                        }
                    </div>
                </div>
            </div>
        </StickyContainer>
        </section>
        </animated.div>
    )
}




/**
 * define the Checkout Page
 */
const CheckoutPage = (props) =>{
    const _cartcontext = useContext(CartContext);
    let { path } = useRouteMatch();

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
        //START sub routes here
        <>
            <Route exact path={path} 
                render={() => <MainBody {...props} />} 
            />  
            <Route path={`${path}/confirmation`}>
                <ConfirmationPage {...props} />
            </Route>
        </>
    )
}

export default CheckoutPage;