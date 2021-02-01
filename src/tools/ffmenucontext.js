import React, {Component} from 'react';

const FFMenuContext = React.createContext();

export class FFMenuContextProvider extends Component{

    state = {
        isBodyOverlayShown: false,
        //defien the overlay clicked callback
        bodyOverlayClicked: ()=>{console.log("This should be assign the callback")},

        pageLoadingState: true,

        //define the default menu data
        data: []
    }

    constructor(props){
        super(props);

        this.showBodyOverlay = this.showBodyOverlay.bind(this);
        this.hideBodyOverlay = this.hideBodyOverlay.bind(this);
        this.hidePageLoader = this.hidePageLoader.bind(this);
        this.isPageLoading = this.isPageLoading.bind(this);

        this.getMenuData = this.getMenuData.bind(this);
        this.setMenuData = this.setMenuData.bind(this);
    }

    isPageLoading(){
        return this.state.pageLoadingState;
    }

    /**
     * Function is to get the menu data
     */
    getMenuData(){
        return this.state.data;
    }

    /**
     * Function is to set menu data
     */
    setMenuData(_data){
        this.setState({data: _data});
        this.hidePageLoader();
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
    
        const {isBodyOverlayShown, bodyOverlayClicked, data } = this.state;
        const { 
            showBodyOverlay, 
            hideBodyOverlay, 
            hidePageLoader, 
            isPageLoading, 
            getMenuData,
            setMenuData
        } = this;

        return(
            <FFMenuContext.Provider
                value={{
                    mealPopupRef,
                    data,

                    isBodyOverlayShown,
                    hidePageLoader,
                    isPageLoading,

                    bodyOverlayClicked,
                    showBodyOverlay,
                    hideBodyOverlay,

                    getMenuData,
                    setMenuData
                }}
            >
                {children}
            </FFMenuContext.Provider>
        )
    }

}

export default FFMenuContext;