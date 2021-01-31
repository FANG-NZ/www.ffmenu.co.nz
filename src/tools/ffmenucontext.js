import React, {Component} from 'react';

const FFMenuContext = React.createContext();

export class FFMenuContextProvider extends Component{

    state = {
        isBodyOverlayShown: false,
        //defien the overlay clicked callback
        bodyOverlayClicked: ()=>{console.log("This should be assign the callback")},

        pageLoadingState: true
    }

    constructor(props){
        super(props);

        this.showBodyOverlay = this.showBodyOverlay.bind(this);
        this.hideBodyOverlay = this.hideBodyOverlay.bind(this);
        this.hidePageLoader = this.hidePageLoader.bind(this);
        this.isPageLoading = this.isPageLoading.bind(this);
    }

    isPageLoading(){
        return this.state.pageLoadingState;
    }

    /**
     * Function is to hide page laoder state
     */
    hidePageLoader(){
        this.setState({pageLoadingState : false});
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
        const mealPopupRef = this.props.mealPopupRef;
        
        const {isBodyOverlayShown, bodyOverlayClicked } = this.state;
        const { showBodyOverlay, hideBodyOverlay, hidePageLoader, isPageLoading } = this;

        return(
            <FFMenuContext.Provider
                value={{
                    mealPopupRef,

                    isBodyOverlayShown,
                    hidePageLoader,
                    isPageLoading,

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