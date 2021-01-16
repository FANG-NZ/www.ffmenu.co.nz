import React, { Component } from 'react';

import Header from './pages/header';
import Content from './pages/content';

class Main extends React.Component{

    render(){
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }

}

export default Main;