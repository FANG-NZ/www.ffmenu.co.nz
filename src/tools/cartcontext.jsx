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
        this.getCartTotal = this.getCartTotal.bind(this);
        this.addItemIntoCart = this.addItemIntoCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
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

        if(this.isCartEmpty()){
            return _total;
        }

        const _items = this.state.items;
        for(let i=0; i < _items.length; i++){
            _total += _items[i].cart_item.price * _items[i].cart_item.qty
        }

        return _total;
    }

    /**
     * Function is to add item into cart
     * @param {object} info the cart item 
     * @param {object} meal the meal object 
     */
    addItemIntoCart(info, meal){
        let _items = this.state.items;

        //Try to find the item from list
        const  _foundIndex = this.findItemFromCart(meal.id);

        if(_foundIndex >= 0){

            //To update current cart item
            _items[_foundIndex].cart_item = info;
        }
        else{
            _items.push({
                mid: meal.id,
                cart_item:info,
                meal: meal
            });
        }

        this.setState({items: _items});
    }

    /**
     * Function is to find if item exists, if YES return the object
     * @param {meal id} _id 
     */
    findItemFromCart(_id){
        const _index = this.state.items.findIndex(x => x.mid === _id);
        return _index;
    }


    /**
     * Function is tpo remove item from cart
     * @param {meal id} _id 
     */
    removeItemFromCart(_id){
        let _items = this.state.items;

        //Try to find the item from list
        const  _foundIndex = this.findItemFromCart(_id);

        if(_foundIndex > -1){
            //To remove item from list
            _items.splice(_foundIndex, 1);

            //Update state
            this.setState({items: _items});
        }
        else{
            console.log("WARNING, there is ITEM found in the list [" + _id + "]");
        }
    }


    render(){
        const {children} = this.props;
        const {isCartPanelShown, items} = this.state;
        const { 
            openCartPanel, 
            closeCartPanel, 
            isCartEmpty, 
            getCartItemNumber,  
            addItemIntoCart, 
            getCartTotal,
            removeItemFromCart } = this;

        return(
            <CartContext.Provider
                value={{
                    isCartPanelShown,
                    items,

                    openCartPanel,
                    closeCartPanel,

                    isCartEmpty,
                    getCartItemNumber,
                    addItemIntoCart,
                    getCartTotal,
                    removeItemFromCart
                }}
            >
                {children}
            </CartContext.Provider>
        )
    }


} 


export default CartContext;