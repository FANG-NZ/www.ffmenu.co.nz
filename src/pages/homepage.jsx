import React, { Component } from 'react';
import {Link} from 'react-scroll';
import CatalogBlock from '../components/catalogblock';


export default class HomePage extends Component{

    constructor(props){
        super(props);

    }

    render(){
        const _data = this.props.catalogs;

        return(
            <>
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <h1 className="mb-0">Our Menu</h1>
                            <h4 className="text-muted mb-0">We provide the best to make your right choose</h4>
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

                                    {_data.map(
                                        (value, index)=>{
                                            let _name = value.name.toLowerCase();
                                                _name = _name.replace(/ /g, "-");

                                            return(
                                                <li key={value.id}>
                                                    {/* <a href={"#" + _name}  onClick={ (event) => event.preventDefault() }>{value.name}</a> */}
                                                    {/* <a href={"#" + _name}  onClick={ (event) => (true) }>{value.name}</a> */}
                                                    <Link
                                                        activeClass="active" to={_name} 
                                                        spy={true} smooth={true} 
                                                        offset={50} duration={500}
                                                        style={{cursor: "pointer"}}    
                                                    >
                                                        {value.name}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    )}

                                    {/* <li><a href="#/about-us" onClick={ (event) => event.preventDefault() }>Burgers</a></li>
                                    <li><a href="#Pasta">Pasta</a></li>
                                    <li><a href="#Pizza">Pizza</a></li>
                                    <li><a href="#Sushi">Sushi</a></li>
                                    <li><a href="#Desserts">Desserts</a></li>
                                    <li><a href="#Drinks">Drinks</a></li> */}
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