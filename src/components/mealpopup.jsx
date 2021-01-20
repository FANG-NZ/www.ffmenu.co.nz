import React, {Component} from 'react';
import {Modal} from  'react-bootstrap';

import bgImage from '../images/modal-add.jpg'
import '../scss/mealpopup.scss';



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



export default class MealPopup extends Component{

    //define the default state
    state = {
        isOpen: false,
        data: {
            qty: 1,
            price_id: 0,
            comments: ""
        },
        meal: {}
    };

    constructor(props){
        super(props);

        this.onPriceChanged = this.onPriceChanged.bind(this);
    }

    //define the functions
    open = (data) => this.setState({ isOpen: true, meal: data });
    close = () => this.setState({ isOpen: false });

    //defien the price radio button clicked
    onPriceChanged(e){
        let _value = e.target.value,
            _data = this.state.data;
            _data.price_id = _value;
        this.setState({data : _data});
    }

    //define the form onSubmit function
    onSubmit(e){
        e.preventDefault();

        let _qty = this.state.data.qty;

        console.log(this.state.data);

        alert("YES FORM SUBMIT QTY is " + _qty );

    }

    render(){
        const _meal = this.state.meal,
              _data = this.state.data;

        return(
            <Modal id="meal-popup" show={this.state.isOpen} onHide={this.close}>
            <form onSubmit={e => this.onSubmit(e)}>
                {/** START header */}
                <Modal.Header className={"modal-header-lg dark bg-dark"}>
                    <div className="bg-image" style={{backgroundImage: `url(${bgImage})`}}>
                        <img src={bgImage} />
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
                            $<span className="product-modal-price"></span>
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
                                <div className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input name="radio_size" type="radio" className="custom-control-input"
                                            value="p_1"
                                            checked={_data.price_id === "p_1"}
                                            onChange={this.onPriceChanged}
                                        />
                                        <span className="custom-control-indicator">
                                            <FFMSVG />
                                        </span>
                                        <span className="custom-control-description">Small - 100g ($9.99)</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input name="radio_size" type="radio" className="custom-control-input" 
                                            value="p_2"
                                            checked={_data.price_id === "p_2"}
                                            onChange={this.onPriceChanged}
                                        />
                                        <span className="custom-control-indicator">
                                            <FFMSVG />
                                        </span>
                                        <span className="custom-control-description">Medium - 200g ($14.99)</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input name="radio_size" type="radio" className="custom-control-input" 
                                            value="p_3"
                                            checked={_data.price_id === "p_3"}
                                            onChange={this.onPriceChanged}
                                        />
                                        <span className="custom-control-indicator">
                                            <FFMSVG />
                                        </span>
                                        <span className="custom-control-description">Large - 350g ($21.99)</span>
                                    </label>
                                </div>
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
                                    this.setState({data: _data})
                                }
                            } 
                        />                   
                    </div>

                    {/** START comments box */}
                    <div className="panel-details panel-details-form">
                        <h5 className="panel-details-title">
                            <span>Others</span>
                            {/* <i className="ti ti-pencil action-icon"></i> */}
                        </h5>
                        <div id="panel-details-other" className="collapse show">                    
                            <textarea cols="30" rows="4" className="form-control" placeholder="Put this any other informations..."></textarea>
                        </div>
                    </div>
                </Modal.Body>

                {/** START button */}
                <button type="submit" className="modal-btn btn btn-secondary btn-block btn-lg">
                    <span>Add to Cart</span>
                </button>           
            </form>
            </Modal>
        );
    }

}