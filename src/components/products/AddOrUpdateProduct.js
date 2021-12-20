import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {getCategories} from "../../redux/actions/categoryActions"
import {getProducts, saveProduct} from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail";


const AddOrUpdateProduct = ({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) => {

    const [product, setproduct] = useState({...props.product})

    const [error, seterror] = useState({})
    
    useEffect(() => {
        if(categories.length===0){
            getCategories();
        }
        setproduct({ ...props.product })
    }, [props.product])

    function handleChange(event) {
        const {name, value} = event.target
        setproduct(prevProduct => ({
            ...prevProduct,
            [name]:name==="categoryId"?parseInt(value, 10):value
        }))

        if(value === ""){
               seterror(preverror => ({
            ...preverror,
            productName:"boş bırakılamaz"
        }))
        }
     
        
    }

    function handleSave(event) {
        console.log(event)
        event.preventDefault()
        saveProduct(product).then(()=>{
            history.push("/")
        })
    }

    return (
        <div>
            <ProductDetail 
                product={product}
                categories={categories}
                onChange={handleChange}
                onSave={handleSave}
                error={error}
            />
        </div>
    )
}

export function getProductById(products, productId) {
    let product = products.find(product => product.id == productId)||null;
    return product
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId
    const product = productId && state.productListReducer.length>0?
    getProductById(state.productListReducer,productId):{}
    return {
        product,
        products : state.productListReducer,
        categories : state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories,
    saveProduct
}

export default connect(mapStateToProps,mapDispatchToProps)(AddOrUpdateProduct)
