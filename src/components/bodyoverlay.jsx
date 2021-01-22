import React, {Component, useState} from 'react';
import FFMenuContext from '../tools/ffmenucontext';

const BodyOverlay = ()=> {

    return(
        <FFMenuContext.Consumer>
            {(context) => {
                return(
                    <div id="body-overlay" 
                        style={{display: (context.isBodyOverlayShown)? 'block': 'none'}}
                        onClick={()=> {
                            
                            //check body overlay if it is FUNCTON, then
                            //triger this FUNCTION
                            if(typeof context.bodyOverlayClicked === "function"){
                                context.bodyOverlayClicked();
                            }
                            
                        }}
                    ></div>
                )
            }}
        </FFMenuContext.Consumer>
    )
}

export default BodyOverlay;