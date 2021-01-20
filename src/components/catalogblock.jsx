import React, { Component } from 'react';
import MealBlock from './mealblock';

export default class CatalogBlock extends Component{

    // onMealClicked(data){
    //     console.log(data);
    // }

    render(){
        const _data = this.props.catalog;

        let _key_name = _data.name.toLowerCase();
            _key_name = _key_name.replace(/ /g, "-");

        return(
            <div name={_key_name} className="menu-category" >
                <div className="menu-category-title">
                    <div className="bg-image">
                        <img src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg" alt="" />
                    </div>
                    <h2 className="title">{_data.name}</h2>
                </div>
                <div className="menu-category-content">
                    
                    {_data.meals.map(
                        (value) => {
                            return <MealBlock key={value.id} meal={value} onMealClicked={this.props.onMealClicked} />
                        }
                    )}
                    
                </div>
            </div>
        );
    }

}