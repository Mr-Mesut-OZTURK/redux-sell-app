import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Container } from 'reactstrap'
import { bindActionCreators } from 'redux';
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"


class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts()
    }

    addToCart(product){
        this.props.actions.addToCart({quantity:1, product})
        alertify.success(product.productName + " sepete eklendi", 1)
        // console.log(this.props.cart)
    }

    render() {

        // console.log(this.props);
        return (
            <Container>
                <h3>
                    <Badge style={{ backgroundColor: "green", fontSize: "1.3em" }}>products</Badge>
                    <Badge style={{ backgroundColor: "blue", fontSize: "1.3em" }}>{this.props.currentCategory.categoryName}</Badge>
                </h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units in Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button
                                            onClick={()=>this.addToCart(product)}
                                            color="success"
                                        >
                                            add
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Container>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer,
        products: state.productListReducer,
        cart:state.cartReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)