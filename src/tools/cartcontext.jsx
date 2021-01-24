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

        this.isCartEmpty = this.isCartEmpty.bind(this);
        this.getCartItemNumber = this.getCartItemNumber.bind(this);
        this.addItemIntoCart = this.addItemIntoCart.bind(this);
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
     * Function is to check if cart is empty
     */
    isCartEmpty(){
        return (this.state.items.length < 1)?true:false;
    }

    getCartItemNumber(){
        return this.state.items.length;
    }

    /**
     * Function is to get cart total amount
     */
    getCartTotal(){
        let _total = 0;


    }

    /**
     * Function is to add item into cart
     * @param {object} info the cart item 
     * @param {object} meal the meal object 
     */
    addItemIntoCart(info, meal){
        let _items = this.state.items;

        _items.push({
            cart_item:info,
            meal: meal
        });

        this.setState({items: _items});
        
        console.log("YES CLICKED");
    }


    render(){
        const {children} = this.props;
        const {isCartPanelShown} = this.state;
        const { openCartPanel, closeCartPanel, isCartEmpty, getCartItemNumber,  addItemIntoCart } = this;

        return(
            <CartContext.Provider
                value={{
                    isCartPanelShown,
                    openCartPanel,
                    closeCartPanel,

                    isCartEmpty,
                    getCartItemNumber,
                    addItemIntoCart
                }}
            >
                {children}
            </CartContext.Provider>
        )
    }


} 


export default CartContext;