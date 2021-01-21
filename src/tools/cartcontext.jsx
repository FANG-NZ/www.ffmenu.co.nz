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
        cart:{}
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

    closeCartPanel(){
        this.setState({isCartPanelShown : false});
    }


    render(){
        const {children} = this.props;
        const {isCartPanelShown} = this.state;
        const { openCartPanel, closeCartPanel } = this;

        return(
            <CartContext.Provider
                value={{
                    isCartPanelShown,
                    openCartPanel,
                    closeCartPanel
                }}
            >
                {children}
            </CartContext.Provider>
        )
    }


} 


export default CartContext;