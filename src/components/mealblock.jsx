import React, {Component} from 'react';
import FFMenuContext from '../tools/ffmenucontext';

export default class MealBlock extends Component{

    render(){
        const _mealObj = this.props.meal,
              _prices = _mealObj.prices;


        return(
            <FFMenuContext.Consumer>
                {(context) => (

                    <div className="menu-item menu-list-item">
                        <div className="row align-items-center">
                            <div className="col-sm-6 mb-2 mb-sm-0">
                                <h6 className="mb-0">{_mealObj.name}</h6>
                                <span className="text-muted text-sm">{_mealObj.description}</span>
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
                                    onClick={
                                        ()=> {
                                            //call context mealpop open function with meal object
                                            context.mealPopupRef.current.open(_mealObj);
                                        }
                                    }
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>

                )}
            </FFMenuContext.Consumer>
        );
    }

}