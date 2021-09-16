import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function changeCategoryReducer(state=initialState.categories, action){

    switch (action.type) {

        case actionTypes.GET_CATEGORIES_SUCCESS:
            // console.log("reducer : ",action.payload)
            return action.payload
    
        default:
            return state;

    }
}