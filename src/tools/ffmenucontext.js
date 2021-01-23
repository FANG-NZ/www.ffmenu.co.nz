import React, {Component} from 'react';

const FFMenuContext = React.createContext();

export class FFMenuContextProvider extends Component{

    state = {
        isBodyOverlayShown: false,
        //defien the overlay clicked callback
        bodyOverlayClicked: ()=>{console.log("This should be assign the callback")}
    }

    constructor(props){
        super(props);

        this.showBodyOverlay = this.showBodyOverlay.bind(this);
        this.hideBodyOverlay = this.hideBodyOverlay.bind(this);
    }

    /**
     * Function is to handle show
     * body overlay
     */
    showBodyOverlay(callback){
        this.setState({
            isBodyOverlayShown : true, 
            bodyOverlayClicked : callback
        });
    }

    /**
     * Function is to hide BODY OVERLAY
     */
    hideBodyOverlay(){
        this.setState({
            isBodyOverlayShown: false, 
            bodyOverlayClicked: undefined
        });
    }

    render(){

        const {children} = this.props;
        const mealPopup = this.props.mealPopup;
        const {isBodyOverlayShown, bodyOverlayClicked} = this.state;
        const { showBodyOverlay, hideBodyOverlay} = this;

        return(
            <FFMenuContext.Provider
                value={{
                    mealPopup,
                    isBodyOverlayShown,
                    bodyOverlayClicked,
                    showBodyOverlay,
                    hideBodyOverlay
                }}
            >
                {children}
            </FFMenuContext.Provider>
        )
    }

}


export default FFMenuContext;