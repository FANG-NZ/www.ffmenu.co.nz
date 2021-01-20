import React, {Component} from 'react';
import {Modal, Button} from  'react-bootstrap';

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
        mealData: {}
    };
    
    open = (data) => this.setState({ isOpen: true, mealData: data });
    close = () => this.setState({ isOpen: false });

    constructor(props){
        super(props);

    }

    render(){
        const _data = this.state.mealData;

        return(
            <Modal id="meal-popup" show={this.state.isOpen} onHide={this.close}>
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
                            <h6 className="mb-0 product-modal-name">{_data.name}</h6>
                            <span className="text-muted product-modal-ingredients">{_data.description}</span>
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
                            <span href="#panel-details-sizes-list">Price</span>
                        </h5>
                        <div id="panel-details-sizes-list" className="collapse show">
                            <div className="panel-details-content">
                                <div className="product-modal-sizes">
                                    <div className="form-group">
                                        <label className="custom-control custom-radio">
                                            <input name="radio_size" type="radio" className="custom-control-input" />
                                            <span className="custom-control-indicator">
                                                <FFMSVG />
                                            </span>
                                            <span className="custom-control-description">Small - 100g ($9.99)</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="custom-control custom-radio">
                                            <input name="radio_size" type="radio" className="custom-control-input" />
                                            <span className="custom-control-indicator">
                                                <FFMSVG />
                                            </span>
                                            <span className="custom-control-description">Medium - 200g ($14.99)</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="custom-control custom-radio">
                                            <input name="radio_size" type="radio" className="custom-control-input" />
                                            <span className="custom-control-indicator">
                                                <FFMSVG />
                                            </span>
                                            <span className="custom-control-description">Large - 350g ($21.99)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-details panel-details-qty">
                        <h5 className="panel-details-title">
                            <span href="#panel-details-sizes-list">QTY</span>
                        </h5>
                        <div id="panel-details-sizes-list" className="collapse show">
                            <div className="panel-details-content">          
                                <button className="action-icon"><i className="ti ti-plus"></i></button>
                                <input name="qty" type="number" className="" value="1" />
                                <button className="action-icon"><i className="ti ti-minus"></i></button>    
                            </div>                   
                        </div>
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

                {/** START body */}
                <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg">
                    <span>Add to Cart</span>
                </button>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={this.close}>
                    Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        );
    }

}