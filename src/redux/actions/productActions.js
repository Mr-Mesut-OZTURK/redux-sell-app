import * as actionTypes from "./actionTypes";


export function getProductsSuccess(products){
    // console.log("action : ",products)
    return {
        type:actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products,
    }
}


export function getProducts(categoryId){
    return function(dispatch){
        // console.log(categoryId)
        let url = "http://localhost:3000/products"
        if(categoryId){
            url += "?categoryId=" + categoryId
        }
        return fetch(url).then(response => response.json())
        .then(result => dispatch(getProductsSuccess(result)))
    }
}