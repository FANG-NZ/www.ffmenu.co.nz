import React, { Component } from 'react';

import Header from './pages/header';
import Footer from './pages/footer'
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage  from './pages/homepage';
import AboutUsPage from './pages/aboutuspage';
import ContactPage from './pages/contactpage';
import NotFoundPage from './pages/notfoundpage';


const data = [
    {
        id: 1,
        name : "Test catalog name",
        meals : [
            {
                id: 1,
                name: 'Test meal one',
                description: "item, anything, good item"
            },
            {
                id: 2,
                name: 'Test meal two'
            }
        ]
    },

    {
        id: 2,
        name : "Another test",
        meals : [
            {
                id: 3,
                name: 'Test meal one'
            },
            {
                id: 4,
                name: 'Test meal two'
            }
        ]
    }
];

class Main extends Component{

    render(){
        return (
            <>
                <Header />
                <HashRouter>
                    <div id="content">
                        <Switch>
                            <Route exact path="/" render={(props) => <HomePage {...props} catalogs={data} />} />
                            <Route path="/about-us" component={ AboutUsPage }/>
                            <Route path="/contact" component={ ContactPage }/>    

                            <Route component={ NotFoundPage } />                            
                        </Switch>
                    </div>
                </HashRouter>

                <Footer />
            </>
        );
    }

}

export default Main;