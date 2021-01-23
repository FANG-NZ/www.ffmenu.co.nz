import React, { Component } from 'react';

import Header from './pages/header';
import Footer from './pages/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {CartProvider} from './tools/cartcontext';
import {FFMenuContextProvider} from './tools/ffmenucontext';

import HomePage  from './pages/homepage';
import AboutUsPage from './pages/aboutuspage';
import ContactPage from './pages/contactpage';
import NotFoundPage from './pages/notfoundpage';

import CartPanel from './components/cartpanel';
import BodyOverlay from './components/bodyoverlay';


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

class Main extends Component{

    render(){
        return (
            <FFMenuContextProvider>
            <CartProvider>

                {/** Add Browser Router */}
                <BrowserRouter>
                <Header />
                
                <div id="content">
                    
                    <Switch>
                        <Route exact path="/" render={(props) => <HomePage {...props} catalogs={data} />} />
                        <Route exact path="/about-us" component={ AboutUsPage }/>
                        <Route exact path="/contact" component={ ContactPage }/>    

                        <Route component={ NotFoundPage } />                            
                    </Switch>
                    
                    <Footer />
                </div>
                
                <CartPanel />
                
                {/** Add body overlay here */}
                <BodyOverlay />
                </BrowserRouter>

            </CartProvider>
            </FFMenuContextProvider>
        );
    }

}

export default Main;