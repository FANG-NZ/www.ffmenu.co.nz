import React, {Component} from 'react';
import {Modal} from  'react-bootstrap';

import bgImage from '../images/modal-add.jpg'
import '../scss/mealpopup.scss';

import CartContext from '../tools/cartcontext';


/**
 * This is for SVG 
 */
const FFMSVG = () => {
    return(
        <svg className="icon" x="0px" y="0px" viewBox="0 0 32 32">
            <path strokeDasharray="19.79 19.79" 
                strokeDashoffset="19.79" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="4" 
                strokeLinecap="square" 
                strokeMiterlimit="10" 
                d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11">
            </path>
        </svg>
    );
}



class MealPriceBlock extends Component{

    render(){
        const _data = this.props.price;

        return(
            <div className="form-group product-price-item">
                <label className="custom-control custom-radio">
                    <input name="radio_size" type="radio" className="custom-control-input"
                        value={_data.id}
                        defaultChecked={this.props.isSlected}
                        //checked={this.props.isSlected}
                        onChange={(e) => this.props.onPriceClicked(e, _data)}
                    />
                    <span className="custom-control-indicator">
                        <FFMSVG />
                    </span>
                    <span className="custom-control-description">
                        <span className="unit">{_data.unit}</span> 
                        <span className="price">(${_data.price})</span>
                    </span>
                </label>
            </div>
        );
    }

}


/**
 * Comonent
 * Meal Popup
 */
export default class MealPopup extends Component{
    static contextType = CartContext;

    //define the default state
    state = {
        isOpen: false,
        is4AddNew: true,
        
        data: {},

        meal: {}
    }

    constructor(props){
        super(props);

        this.item_id = null;

        this.onPriceSlected = this.onPriceSlected.bind(this);
    }

    /**
     * Function is to open popup
     * @param {meal object} _meal
     * @param {cart item id} _id
     * cart & meal info 
     */
    open = (_meal, _id = null) => {

        //To check if item has been added into cart
        const _is4AddNew = !this.context.ifItemExists(_id);

        let _cartItem = {};

        if(!_is4AddNew){
            this.item_id = _id;
             _cartItem = this.context.getCartItemFromCart(_id);
        }else{

            _cartItem = {
                qty: 1,
                price_id: _meal.prices[0].id,
                unit: _meal.prices[0].unit,
                price: _meal.prices[0].price,
                comments: ""
            };

        }

        this.setState({ 
            isOpen: true, 
            is4AddNew: _is4AddNew, 
            data: _cartItem,
            meal: _meal
        });
    }

    /**
     * Function is to handle close popup
     */
    close = () => {

        this.item_id = null;

        this.setState({ 
            isOpen: false, 
            is4AddNew: true,
            data: {
                qty: 1,
                price_id: 0,
                unit: "",
                price: 0,
                comments: ""
            },
            meal: {}
        });
    }

    //defien the price radio button clicked
    onPriceSlected(e, object){
        let _value = e.target.value;

        let _data = this.state.data;
        //To update price info
        _data.price_id = _value;
        _data.unit = object.unit;
        _data.price = object.price;

        this.setState({data : _data});
    }

    //define the form onSubmit function
    onSubmit(e){
        e.preventDefault();
        const {data, meal} = this.state;

        //call cart context to add new item
        this.context.addItemIntoCart(data, meal, this.item_id);

        //To update cart info
        //close popup
        this.close();
    }

    render(){
        const _meal = this.state.meal;
        const _data = this.state.data;
        
        //here is to setup default price value
        // if(this.state.is4AddNew && "prices" in _meal){
        //     _data.price_id = _meal.prices[0].id;
        //     _data.unit = _meal.prices[0].unit;
        //     _data.price = _meal.prices[0].price;
        // }

        const _subTotal = _data.price * _data.qty;

        return(
            <Modal id="meal-popup" show={this.state.isOpen} onHide={this.close}>
            <form onSubmit={e => this.onSubmit(e)}>
                {/** START header */}
                <Modal.Header className={"modal-header-lg dark bg-dark"}>
                    <div className="bg-image" style={{backgroundImage: `url(${bgImage})`}}>
                        <img src={bgImage} alt="catalog banner" />
                    </div>
                    <Modal.Title style={{marginBottom: 0}}>Specify your dish</Modal.Title>
                    <button type="button" className="close" onClick={this.close}>
                        <i className="ti ti-close"></i>
                    </button>
                </Modal.Header>

                {/** START meal details box */}
                <div className="modal-product-details">
                    <div className="row align-items-center">
                        <div className="col-9">
                            <h6 className="mb-0 product-modal-name">{_meal.name}</h6>
                            <span className="text-muted product-modal-ingredients">{_meal.description}</span>
                        </div>
                        <div className="col-3 text-lg text-right">
                            $<span className="product-modal-price">{_subTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/** START body */}
                <Modal.Body>
                    {/** START price box */}
                    <div className="panel-details panel-details-size">
                        <h5 className="panel-details-title">
                            <span>Price</span>
                        </h5>
                        <div className="collapse show">
                            
                            <div className="product-modal-sizes">

                                {'prices' in _meal && _meal.prices.map(
                                    (value) => {
                                        return <MealPriceBlock 
                                                    key={value.id} 
                                                    isSlected={(Number.parseInt(_data.price_id) === value.id)?true:false}
                                                    price={value} 
                                                    onPriceClicked={(e, object) => this.onPriceSlected(e, object)} 
                                                />
                                    }
                                )}
                                
                            </div>
                            
                        </div>
                    </div>

                    <div className="panel-details panel-details-qty">
                        <h5 className="panel-details-title">
                            <span href="#panel-details-sizes-list">QTY</span>
                        </h5>
                        <input name="qty" type="number" className="form-control" min="1"
                            value={_data.qty} 
                            onChange={
                                (e) => {
                                    let _value = e.target.value,
                                        _data = this.state.data;

                                    _data.qty = _value;
                                    this.setState({data: _data});
                                }
                            } 
                        />                   
                    </div>

                    {/** START comments box */}
                    <div className="panel-details panel-details-form">
                        <h5 className="panel-details-title">
                            <span>Comments</span>
                            {/* <i className="ti ti-pencil action-icon"></i> */}
                        </h5>
                        <div id="panel-details-other" className="collapse show">                    
                            <textarea 
                                cols="30" 
                                rows="2" 
                                className="form-control" 
                                placeholder="Put this any other informations..." 
                                value={_data.comments} 
                                onChange={
                                    (e) => {
                                        let _value = e.target.value,
                                            _data = this.state.data;
                                            _data.comments = _value;
                                        this.setState({data: _data})
                                    }
                                } 
                            />
                        </div>
                    </div>
                </Modal.Body>

                {/** START button */}
                <button type="submit" className="modal-btn btn btn-secondary btn-block btn-lg">
                    <span>
                        { this.state.is4AddNew ? 'Add To Cart' : 'Update Cart'} 
                    </span>
                </button>           
            </form>
            </Modal>
        );
    }

}