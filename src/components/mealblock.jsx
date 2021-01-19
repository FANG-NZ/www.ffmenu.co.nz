import React, {Component} from 'react';

export default class MealBlock extends Component{

    constructor(props){
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(id){
        const _data = this.props.meal;

        //alert("Yes clicked == " + id + " MEAL : " + _data.name);
        //call parents function
        this.props.onMealClicked(_data);
    }

    render(){
        const _data = this.props.meal;

        return(
            <div className="menu-item menu-list-item">
                <div className="row align-items-center">
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <h6 className="mb-0">{_data.name}</h6>
                        <span className="text-muted text-sm">{_data.description}</span>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                        <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                        </span>
                        <button className="btn btn-outline-secondary btn-sm" data-action="open-cart-modal" 
                            onClick={() => this.handleClicked(_data.id)}
                        >
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}