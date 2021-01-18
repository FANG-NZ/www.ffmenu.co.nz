import React, { Component } from 'react';

import Header from './pages/header';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage  from './pages/homepage';
import AboutUsPage from './pages/aboutuspage';
import ContactPage from './pages/contactpage';


const data = [
    {
        id: 1,
        name : "Test catalog name",
        meals : [
            {
                name: 'Test meal one'
            },
            {
                name: 'Test meal two'
            }
        ]
    },

    {
        id: 2,
        name : "Another test",
        meals : [
            {
                name: 'Test meal one'
            },
            {
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
                        </Switch>
                    </div>
                </HashRouter>
            </>
        );
    }

}

export default Main;