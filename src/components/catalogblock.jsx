import React, { Component } from 'react';
import MealBlock from './mealblock';

import chickenImg from '../images/catalogs/chicken.png';
import donburiImg from '../images/catalogs/donburi.png';
import hotDrinksImg from '../images/catalogs/hot-drinks.png';
import kidSushiImg from '../images/catalogs/kid-sushi.png';
import noodlesImg from '../images/catalogs/noodles.png';
import salmonImg from '../images/catalogs/salmon.png';
import seafoodImg from '../images/catalogs/seafood.png';
import vegetarianImg from '../images/catalogs/vegetarian.png';
import yakiSobaImg from '../images/catalogs/yaki-soba.png';

/**
 * Helper function is to return 
 * image
 * At this stage, we hard code this here
 * @param {*} _name 
 */
const getImage = (_name) => {

    switch (_name) {
        case "chicken":
            return chickenImg;
           
        case "donburi":
            return donburiImg;
           
        case "hot-drinks":
            return hotDrinksImg;

        case "kid-sushi":
            return kidSushiImg;

        case "noodles":
            return noodlesImg;

        case "salmon":
            return salmonImg;

        case "seafood":
            return seafoodImg;

        case "vegetarian":
            return vegetarianImg;

        case "yaki-soba":
            return yakiSobaImg;
            
        default:
            break;
    }

};

export default class CatalogBlock extends Component{

    render(){
        const _data = this.props.catalog;

        let _key_name = _data.name.toLowerCase();
            _key_name = _key_name.replace(/ /g, "-");

        return(
            <div name={_key_name} className="menu-category" >
                <div className="menu-category-title">
                    <div className="bg-image" style={{backgroundImage: `url(${getImage(_data.banner_img)})`}}></div>
                    <h2 className="title">{_data.name}</h2>
                </div>
                <div className="menu-category-content">
                    
                    {_data.meals.map(
                        (value) => {
                            return <MealBlock key={value.id} meal={value} />
                        }
                    )}
                    
                </div>
            </div>
        );
    }

}