import React, { Component } from 'react';

import Header from './pages/header';
import Footer from './pages/footer'
import { Route, Switch, useLocation } from 'react-router-dom';

import CartContext, {CartProvider} from './tools/cartcontext';
import {FFMenuContextProvider} from './tools/ffmenucontext';

import HomePage  from './pages/homepage';
import AboutUsPage from './pages/aboutuspage';
import ContactPage from './pages/contactpage';
import CheckoutPage from './pages/checkoutpage';
import NotFoundPage from './pages/notfoundpage';

import CartPanel from './components/cartpanel';
import BodyOverlay from './components/bodyoverlay';
import MealPopup from './components/mealpopup';


const data = [
    {
        id: 1,
        name : "Chicken",
        banner_img: "http://themes.suelo.pl/soup/assets/img/photos/menu-title-burgers.jpg",
        meals : [
            {
                id: 1,
                name: 'Teriyaki Chicken & Avocado Row',
                description: "avocado, cucumber, capsicum",
                prices: [
                    {
                        id: 1,
                        unit: "5/pc(s)",
                        price: 8.50
                    },
                    {
                        id: 2,
                        unit: "10/pc(s)",
                        price: 17.00
                    }
                ]
            },
            {
                id: 2,
                name: 'Teriyaki Chicken & Cream Row',
                description: "avocado, cucumber, capsicum",
                prices: [
                    {
                        id: 3,
                        unit: "5/pc(s)",
                        price: 8.50
                    },
                    {
                        id: 4,
                        unit: "10/pc(s)",
                        price: 17.00
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        name : "Salmon",
        banner_img: "http://themes.suelo.pl/soup/assets/img/photos/menu-title-sushi.jpg",
        meals : [
            {
                id: 3,
                name: 'Fresh Salmon & Avocado Row',
                description: "avocado",
                prices: [
                    {
                        id: 5,
                        unit: "5/pc(s)",
                        price: 9.00
                    },
                    {
                        id: 6,
                        unit: "10/pc(s)",
                        price: 18.00
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        name : "Donburi",
        banner_img: "http://themes.suelo.pl/soup/assets/img/photos/menu-title-drinks.jpg",
        meals : [
            {
                id: 4,
                name: 'Teriyaki Chicken Donburi',
                description: "vegetable salad, mustard sauce",
                prices: [
                    {
                        id: 7,
                        unit: "pack",
                        price: 13.90
                    }
                ]
            }
        ]
    }
];

/**
 * Create switch routes block
 */
const SwitchRouteBlock = () => {
    //using cart context
    const _cartContext = React.useContext(CartContext);

    //using location
    let _location = useLocation();
    
    React.useEffect(()=>{
        console.log(_location);
        if(_location.pathname === "/checkout"){
            _cartContext.disableShowCartPanel();
        }else{
            _cartContext.enableShowCartPanel();
        }
    });

    return(
        <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} catalogs={data} />} />
            <Route exact path="/about-us" component={ AboutUsPage }/>
            <Route exact path="/contact" component={ ContactPage }/>    

            <Route exact path="/checkout" component={ CheckoutPage }/>    
            <Route component={ NotFoundPage } />                            
        </Switch>
    )
}



const Main = () => {

    //define the meal popup ref
    const _mealpopupRef = React.createRef();

    
    
    return (
        <FFMenuContextProvider mealPopupRef={_mealpopupRef}>
        <CartProvider>

            <Header />
            
            <div id="content">
                
                <SwitchRouteBlock />
                
                <Footer />
            </div>
            
            {/** Add Cart Panel */}
            <CartPanel />

            {/** Add Meal Popup */}
            <MealPopup ref={_mealpopupRef} />
            
            {/** Add body overlay here */}
            <BodyOverlay />

        </CartProvider>
        </FFMenuContextProvider>
    );
}

export default Main;