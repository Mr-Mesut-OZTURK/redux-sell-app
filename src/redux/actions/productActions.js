import * as actionTypes from "./actionTypes";


export function getProductsSuccess(products) {
    // console.log("action : ",products)
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products,
    }
}


export function getProducts(categoryId) {
    return function (dispatch) {
        // console.log(categoryId)
        let url = "http://localhost:3000/products"
        if (categoryId) {
            url += "?categoryId=" + categoryId
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}




export function createProductSuccess(product) {
    // console.log("action : ",products)
    return {
        type: actionTypes.CREATE_PRODUCT_SUCCESS,
        payload: product,
    }
}

export function updateProductsSuccess(product) {
    // console.log("action : ",products)
    return {
        type: actionTypes.UPDATED_PRODUCT_SUCCESS,
        payload: product,
    }
}

export async function handleResponse(response) {
    console.log(response)
    if(response.ok){
        return response.json()
    }

    const error = await response.text()
    throw new Error(error)
}

export function handleError(error) {
    console.log("handleError")
    console.log("Bir hata oluştu")
    throw error
}

export function saveProductApi(product) {
    console.log(product)
    return fetch("http://localhost:3000/products/" + (product.id?product.id:""),
        {
            method: product.id ? "PUT" : "POST",
            headers: { "content-type": "aplication/json" },
            body: JSON.stringify(product)
        })
        .then(handleResponse)
        .catch(handleError)

}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product)
            .then(savedProduct => {
                product.id ?
                    dispatch(updateProductsSuccess(savedProduct))
                    :
                    dispatch(createProductSuccess(savedProduct))
            }).catch(error => { throw error })
    }
}

