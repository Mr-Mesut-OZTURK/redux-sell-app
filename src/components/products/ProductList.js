import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';

import { Badge, Button, Container, Table } from 'reactstrap'

import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"

import alertify from "alertifyjs"


class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts(this.props.currentCategory.id)
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
                <div className="">
                    {!this.props.currentCategory.categoryName && <Badge style={{ backgroundColor: "green", fontSize: "1.3em" }}>products</Badge>}
                    <Badge style={{ backgroundColor: "green", fontSize: "1.3em", width: "100%"}}>{this.props.currentCategory.categoryName}</Badge>
                </div>
                <div className="table-responsive alert alert-primary p-0">
                <table className="w-100 table table-striped table-hover">
                    <thead>
                        <tr className="bg-primary text-light">
                            {/* <th>#</th> */}
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((product, index) => (
                                <tr key={index} style={{}}>
                                    {/* <td>{product.id}</td> */}
                                    <td>
                                        <Link style={{textDecoration:'none', color:'black', width: "100%", display:"block"}} to={"/saveproduct/" + product.id}>{product.productName}</Link>
                                    </td>
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
                </div>
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