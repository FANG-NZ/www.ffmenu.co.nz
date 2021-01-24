import React from 'react';

//create Cart context
const CartContext = React.createContext();

/**
 * Define the cart context, so we can control the data of cart
 * in whole APP
 */
export class CartProvider extends React.Component{

    //cart cart text
    state = {
        isCartPanelShown: false,
        //main cart data
        items:[]
    }

    constructor(props){
        super(props);

        this.openCartPanel = this.openCartPanel.bind(this);
        this.closeCartPanel = this.closeCartPanel.bind(this);
    }

    //To open cart panel
    openCartPanel(){
        this.setState({isCartPanelShown : true});
    }

    //To close cart panel
    closeCartPanel(){
        this.setState({isCartPanelShown : false});
    }


    /**
     * Function is to add item into cart
     * @param {object} info the cart item 
     * @param {object} meal the meal object 
     */
    addItem(info, meal){

        
        console.log("YES CLICKED");
    }


    render(){
        const {children} = this.props;
        const {isCartPanelShown} = this.state;
        const { openCartPanel, closeCartPanel, addItem } = this;

        return(
            <CartContext.Provider
                value={{
                    isCartPanelShown,
                    openCartPanel,
                    closeCartPanel,
                    addItem
                }}
            >
                {children}
            </CartContext.Provider>
        )
    }


} 


export default CartContext;