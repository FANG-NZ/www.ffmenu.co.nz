import React, {Component} from 'react';

export default class MealBlock extends Component{

    render(){
        const _data = this.props.meal,
              _prices = _data.prices;


        return(
            <div className="menu-item menu-list-item">
                <div className="row align-items-center">
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <h6 className="mb-0">{_data.name}</h6>
                        <span className="text-muted text-sm">{_data.description}</span>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                        <span className="text-md mr-4">
                            {/** Check if there > 1 prices option */}
                            {_prices.length > 1 &&
                                <span className="text-muted" style={{paddingRight: "5px"}}>from</span>
                            }
                            $<span data-product-base-price>{_prices[0].price.toFixed(2)}</span>
                        </span>
                        
                        <button className="btn btn-outline-secondary btn-sm" 
                            onClick={()=> this.props.onMealClicked({cart_item: null, meal: _data})}
                        >
                        {/* <button className="btn btn-outline-secondary btn-sm" 
                            onClick={()=> this.props.onMealClicked({
                                cart_item: {
                                    qty: 2,
                                    price_id: 2,
                                    price: 19.99,
                                    comments: "Test line here"
                                }, 
                                meal: _data
                            })}
                        > */}
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}