import React, { Component } from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {StickyContainer, Sticky} from 'react-sticky-17';

import CatalogBlock from '../components/catalogblock';
import MealPopup from '../components/mealpopup';

import '../scss/homepage.scss';


export default class HomePage extends Component{

    constructor(props){
        super(props);

        //create meal popup ref
        this.mealpopupRef = React.createRef();
        //To bind THIS into openMealPopup
        this.openMealPopup = this.openMealPopup.bind(this);
    }

    //Function is to open meal popup
    openMealPopup(data){

        //call meal popup method
        this.mealpopupRef.current.open(data);
    }

    //defien the component mount
    componentDidMount(){
        // const _test = {
        //     id: 1,
        //     name: 'THIS IS TESTING',
        //     description: "item, anything, good item"
        // };
        // this.mealpopupRef.current.open(_test);
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
            <StickyContainer>
            <div className="page-content">
                <div className="container">
                    <div className="row no-gutters">

                        {/** START nav bar */}
                        <div className="col-md-3">         
                            
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
                            
                            {this.props.catalogs.map(
                                (value, index) => {
                                    return <CatalogBlock key={value.id} catalog={value} onMealClicked={this.openMealPopup}/>;
                                }
                            )}
                            
                        </div>

                    </div>
                </div>
            </div>
            </StickyContainer>

            <MealPopup ref={this.mealpopupRef} />
            </>   
        );
    }

}