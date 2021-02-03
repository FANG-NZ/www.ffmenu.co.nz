import React, {Component} from 'react';

const FFMenuContext = React.createContext();

export class FFMenuContextProvider extends Component{

    state = {
        isBodyOverlayShown: false,
        //defien the overlay clicked callback
        bodyOverlayClicked: ()=>{console.log("This should be assign the callback")},

        pageLoadingState: true,

        //define the default menu data
        menuData: []
    }

    constructor(props){
        super(props);

        this.showBodyOverlay = this.showBodyOverlay.bind(this);
        this.hideBodyOverlay = this.hideBodyOverlay.bind(this);
        this.hidePageLoader = this.hidePageLoader.bind(this);
        this.isPageLoading = this.isPageLoading.bind(this);

        this.getMenuData = this.getMenuData.bind(this);
        this.setMenuData = this.setMenuData.bind(this);

        this.setMealpopupRef = this.setMealpopupRef.bind(this);
    }

    isPageLoading(){
        return this.state.pageLoadingState;
    }

    /**
     * Function is to get the menu data
     */
    getMenuData(){
        return this.state.menuData;
    }

    /**
     * Function is to set menu data
     */
    setMenuData(_data){
        this.setState({menuData: _data});
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

    /**
     * Function is to setup meal popup
     * @param {*} _popup 
     */
    setMealpopupRef(_popup){
        this.mealPopupRef = React.createRef();

        this.mealPopupRef = _popup;
    }

    render(){

        const {children} = this.props;
        const mealPopupRef = this.mealPopupRef;
    
        const {isBodyOverlayShown, bodyOverlayClicked } = this.state;
        const { 
            showBodyOverlay, 
            hideBodyOverlay, 
            hidePageLoader, 
            isPageLoading, 
            getMenuData,
            setMenuData,
            setMealpopupRef
        } = this;

        return(
            <FFMenuContext.Provider
                value={{
                    mealPopupRef,

                    isBodyOverlayShown,
                    hidePageLoader,
                    isPageLoading,

                    bodyOverlayClicked,
                    showBodyOverlay,
                    hideBodyOverlay,

                    getMenuData,
                    setMenuData,
                    setMealpopupRef
                }}
            >
                {children}
            </FFMenuContext.Provider>
        )
    }

}

export default FFMenuContext;