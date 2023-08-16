import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const addItemsHandler = (item)=>{}
    const removeItemsHandler = (item)=>{}
    const cartContext = {
        items:[],
        amount:0,
        addItems:addItemsHandler,
        removeItems:removeItemsHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;