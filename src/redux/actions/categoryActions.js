import * as actionTypes from "./actionTypes";



export function change_category(category){
    return {
        type:actionTypes.CHANGE_CATEGORY,
        payload: category,
    }
}
