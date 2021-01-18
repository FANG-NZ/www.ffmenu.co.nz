import React, { Component } from 'react';

export default class CatalogBlock extends Component{

    render(){
        const _data = this.props.catalog;

        return(
            <div id="Burgers" className="menu-category" >
                <div className="menu-category-title">
                    <div className="bg-image">
                        <img src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg" alt="" />
                    </div>
                    <h2 className="title">{_data.name}</h2>
                </div>
                <div className="menu-category-content">
                    
                    <div className="menu-item menu-list-item">
                        <div className="row align-items-center">
                            <div className="col-sm-6 mb-2 mb-sm-0">
                                <h6 className="mb-0">Beef Burger</h6>
                                <span className="text-muted text-sm">Beef, cheese, potato, onion, fries</span>
                            </div>
                            <div className="col-sm-6 text-sm-right">
                                <span className="text-md mr-4">
                                    <span className="text-muted">from</span> $
                                    <span data-product-base-price>9.00</span>
                                </span>
                                <button className="btn btn-outline-secondary btn-sm" data-action="open-cart-modal" data-id="1">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

}