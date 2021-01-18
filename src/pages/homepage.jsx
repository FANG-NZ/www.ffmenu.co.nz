import React, { Component } from 'react';
import CatalogBlock from '../components/catalogblock';


export default class HomePage extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <h1 className="mb-0">Home Page</h1>
                            <h4 className="text-muted mb-0">This is our HOME PAGE</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/** START menu list */}
            <div className="page-content">
                <div className="container">
                    <div className="row no-gutters">

                        {/** START nav bar */}
                        <div className="col-md-3">         
                            <nav id="menu-navigation" className="stick-to-content" data-local-scroll>
                                <ul className="nav nav-menu bg-dark dark">
                                    <li><a href="#/about-us" onClick={ (event) => event.preventDefault() }>Burgers</a></li>
                                    <li><a href="#Pasta">Pasta</a></li>
                                    <li><a href="#Pizza">Pizza</a></li>
                                    <li><a href="#Sushi">Sushi</a></li>
                                    <li><a href="#Desserts">Desserts</a></li>
                                    <li><a href="#Drinks">Drinks</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/** START catalog & meals */}
                        <div className="col-md-9">
                            
                            {this.props.catalogs.map(
                                (value, index) => {
                                    return <CatalogBlock key={value.id} catalog={value} />;
                                }
                            )}
                            
                        </div>

                    </div>
                </div>
            </div>

            </>   
        );
    }

}