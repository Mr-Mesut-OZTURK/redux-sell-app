import * as actionTypes from "./actionTypes";


export function addToCart(cartItem){
    // console.log("action : ",products)
    return {
        type:actionTypes.ADD_TO_CART,
        payload: cartItem,
    }
}

export function removeFromCart(products){
    // console.log("action : ",products)
    return {
        type:actionTypes.REMOVE_FROM_CART,
        payload: products,
    }
}