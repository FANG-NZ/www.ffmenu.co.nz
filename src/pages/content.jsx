import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import HomePage  from './homepage';
import AboutUsPage from './aboutuspage';
import ContactPage from './contactpage';
 
class Content extends React.Component{

    //Render function
    render(){
        return(
            <HashRouter>
            <div id="content">
                <Route exact path="/" component={ HomePage }/>
                <Route path="/about-us" component={AboutUsPage}/>
                <Route path="/contact" component={ContactPage}/>    
            </div>
            </HashRouter>
        );
    }


}

export default Content;