import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function cartReducer(state=initialState.cart, action){

    switch (action.type) {

        case actionTypes.ADD_TO_CART:
            // console.log(state)
            let addedItem = state.find(item => item.product.id === action.payload.product.id);
            
            if(addedItem){
                var newState = state.map(cartItem => {
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({}, addedItem, {quantity:addedItem.quantity + 1})
                    }
                    return cartItem
                })
                return newState
            }else{
                return [...state, {...action.payload}]
            }
    
        case actionTypes.REMOVE_FROM_CART:
            return action.payload
    
        default:
            return state;

    }
}