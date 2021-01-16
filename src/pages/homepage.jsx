import React, { Component } from 'react';

export default class HomePage extends Component{

    render(){
        return(
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <h1 className="mb-0">Home Page</h1>
                            <h4 className="text-muted mb-0">This is our HOME PAGE</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}