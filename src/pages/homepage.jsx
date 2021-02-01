import React, { Component } from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {StickyContainer, Sticky} from 'react-sticky-17';
import {animated} from 'react-spring/renderprops';

import CatalogBlock from '../components/catalogblock';
//import CartContext from '../tools/cartcontext';
import FFMenuContext from '../tools/ffmenucontext';

import '../scss/homepage.scss';


export default class HomePage extends Component{
    static contextType = FFMenuContext;

    state = {
        data:[]
    }

    /**
     * compontDidMount
     * Function is to setup default data here
     * for TESTING
     */
    // componentDidMount(){

    //     fetch(process.env.REACT_APP_BASE_URL + "api/get-menu")
    //         .then(res => res.json())
    //         .then(
    //             //For success
    //             (result)=>{
                    
    //                 //updateData(result);
    //                 this.setState({data: result}); 
    //                 this.context.hidePageLoader();
                    
    //             },
    //             //For error
    //             (error)=>{
    //                 console.error(error);
    //             }
    //         )

        
    // }


    render(){
        //const _data = this.props.catalogs;
        const _data = this.context.getMenuData();
        //const _data = this.state.data;
        const _style = this.props.style;

        return(
            <FFMenuContext.Consumer>
                {(_context) => (
            <animated.div 
                className="page-animate"
                style={_style} 
            >
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
                <StickyContainer>
                <div className="container">
                    <div className="row no-gutters">

                        {/** START nav bar */}
                        <div className="col-md-3 stick-holder">         
                            
                                <Sticky>{
                                    ({style, isSticky}) => 
                                        <nav id="menu-navigation" className="stick-to-content" style={style}>
                                            <ul className="nav nav-menu bg-dark dark">

                                                {_data.map(
                                                    (value, index)=>{
                                                        let _name = value.name.toLowerCase();
                                                            _name = _name.replace(/ /g, "-");

                                                        return(
                                                            <li key={value.id}>
                                                                <ScrollLink
                                                                    activeClass="active" 
                                                                    to={_name} 
                                                                    spy={true} 
                                                                    smooth={true} 
                                                                    offset={50} 
                                                                    duration={500}
                                                                    style={{cursor: "pointer"}}    
                                                                >
                                                                    {value.name}
                                                                </ScrollLink>
                                                            </li>
                                                        )
                                                    }
                                                )}

                                            </ul>
                                        </nav>
                                }</Sticky>
                            
                        </div>

                        {/** START catalog & meals */}
                        <div className="col-md-9">
                            
                            {_data.map(
                                (value, index) => {
                                    return <CatalogBlock key={value.id} catalog={value} />;
                                }
                            )}
                            
                        </div>

                    </div>
                </div>
                </StickyContainer>
            </div>
            </animated.div> 
                )}
            </FFMenuContext.Consumer>
        );
    }

}