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
        /**
         * Structure of item
         * [
         *   id        {string meal id & selected price id}
         *   cart_item {cart item info}
         *      {
         *          qty: 1,
                    price_id: 0,
                    unit: "",
                    price: 0,
                    comments: ""
                }
         *   meal      {object of meal}
         * ]
         * 
         */
        items:[]
    }

    //define the show cart panel
    _showCartPanelState = true

    canShowCartPanel(){
        return this._showCartPanelState;
    }

    disableShowCartPanel = () => {
        this._showCartPanelState = false;
    }

    enableShowCartPanel = ()=> {
        this._showCartPanelState = true;
    }

    constructor(props){
        super(props);

        //To setup base key number
        this.baseKey = this.state.items.length;

        this.openCartPanel = this.openCartPanel.bind(this);
        this.closeCartPanel = this.closeCartPanel.bind(this);
        this.disableShowCartPanel = this.disableShowCartPanel.bind(this);
        this.enableShowCartPanel = this.enableShowCartPanel.bind(this);
        this.canShowCartPanel = this.canShowCartPanel.bind(this);

        this.loadDataFromLocalStorage = this.loadDataFromLocalStorage.bind(this);

        this.isCartEmpty = this.isCartEmpty.bind(this);
        this.getCartItemNumber = this.getCartItemNumber.bind(this);
        this.getCartTotal = this.getCartTotal.bind(this);
        this.addItemIntoCart = this.addItemIntoCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.ifItemExists = this.ifItemExists.bind(this);
        this.getCartItemFromCart = this.getCartItemFromCart.bind(this);
        this.clearCartItems = this.clearCartItems.bind(this);
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
     * @param {cart item id} id
     */
    addItemIntoCart(info, meal, id){
        let _items = this.state.items;

        //Try to find the item from list
        let  _foundIndex = this.findItemIndexFromCart(id);

        if(_foundIndex >= 0){

            //To update current cart item
            _items[_foundIndex].cart_item = info;
        }
        else{
            //To create cart item id
            const _id = this.baseKey = (this.baseKey + 1);

            _items.push({
                id: _id,
                cart_item:info,
                meal: meal
            });

        }

        //To store cart info into local storeage
        localStorage.setItem("ffmenu_cart_info", JSON.stringify(_items));

        this.setState({items: _items});
    }

    /**
     * Function is to find if item exists, if YES return the object
     * @param {cart item id} _id 
     */
    findItemIndexFromCart(_id){
        const _index = this.state.items.findIndex(x => x.id === _id);
        return _index;
    }

    /**
     * Function is to check if this item has been added
     * into list(items)
     * @param {cart item id} _id 
     * @returns {boolean}
     */
    ifItemExists(_id){
        const _index = this.findItemIndexFromCart(_id);

        if(_index > -1){
            return true;
        }
        return false;
    }


    /**
     * Function is to get cart item info from
     * cart items
     * @param {cart item id} _id 
     */
    getCartItemFromCart(_id){
        const _index = this.findItemIndexFromCart(_id);

        if(_index > -1){
            return this.state.items[_index].cart_item;
        }
        console.error("Error, trying to find item with[" + _index + "] from items array");
    }


    /**
     * Function is tpo remove item from cart
     * @param {cart item id} _id 
     */
    removeItemFromCart(_id){
        let _items = this.state.items;

        //Try to find the item from list
        const  _foundIndex = this.findItemIndexFromCart(_id);

        if(_foundIndex > -1){
            //To remove item from list
            _items.splice(_foundIndex, 1);

            //To store cart info into local storeage
            localStorage.setItem("ffmenu_cart_info", JSON.stringify(_items));
            //Update state
            this.setState({items: _items});
        }
        else{
            console.log("WARNING, there is ITEM found in the list [" + _id + "]");
        }
    }

    /**
     * Function is to clear cart info
     * it should be called after submit
     */
    clearCartItems(){

        //To setup empty items array into state
        this.setState({items: []});
        //clear local storage
        localStorage.removeItem("ffmenu_cart_info");

    }


    /**
     * Function is to try load data back from local storage
     */
    loadDataFromLocalStorage(){
        const _data = localStorage.getItem("ffmenu_cart_info");

        //If data is empty, nothing to do here
        if(!_data){
            return;
        }

        const _items = JSON.parse(_data);
        const _baseKey = _items[_items.length-1].id;

        //To init cart data here
        this.baseKey = _baseKey;
        this.setState({items: _items});
    }


    render(){
        const {children} = this.props;
        const {isCartPanelShown, items} = this.state;
        const { 
            openCartPanel, 
            closeCartPanel, 
            disableShowCartPanel,
            enableShowCartPanel,
            canShowCartPanel,

            loadDataFromLocalStorage,

            isCartEmpty, 
            getCartItemNumber,  
            addItemIntoCart, 
            getCartTotal,
            removeItemFromCart,
            ifItemExists,
            getCartItemFromCart,
            clearCartItems } = this;

        return(
            <CartContext.Provider
                value={{
                    isCartPanelShown,
                    items,

                    openCartPanel,
                    closeCartPanel,
                    disableShowCartPanel,
                    enableShowCartPanel,
                    canShowCartPanel,

                    loadDataFromLocalStorage,

                    isCartEmpty,
                    getCartItemNumber,
                    addItemIntoCart,
                    getCartTotal,
                    removeItemFromCart,
                    ifItemExists,
                    getCartItemFromCart,
                    clearCartItems
                }}
            >
                {children}
            </CartContext.Provider>
        )
    }


} 


export default CartContext;