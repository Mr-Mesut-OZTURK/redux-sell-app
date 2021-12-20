import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartActions from "../../redux/actions/cartActions"
import { Button } from 'reactstrap'
import alertify from 'alertifyjs'

class CartDetail extends Component {

    delItem = (cartItem) => {
        this.props.actions.removeFromCart(cartItem)
        alertify.error(cartItem.product.productName + " deleted from cart!...")

    }
    render() {
        // console.log(this.props.cart)
        return (
            <div>
                {
                    this.props.cart.length > 0 ?
                        (
                            <div>
                                <h2
                                    className="alert alert-primary"
                                    style={{ textAlign: "center", margin: "20px 0" }}
                                >My Cart</h2>
                                <table
                                    style={{
                                        // border:"solid", 
                                        width: "100%",
                                    }}
                                    className="table table-striped alert alert-primary"
                                >

                                    <thead>
                                        <tr>
                                            {/* <th>#</th> */}
                                            <th>Name</th>
                                            <th>quantityPerUnit</th>
                                            <th>Price</th>
                                            <th>Count</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <thead>
                                        {
                                            this.props.cart.map((cartItem, index) => (
                                                <tr key={index}>
                                                    {/* <td>{index + 1}</td> */}
                                                    <td>{cartItem.product.productName}</td>
                                                    <td>{cartItem.product.quantityPerUnit}</td>
                                                    <td>{cartItem.product.unitPrice}</td>
                                                    <td>{cartItem.quantity}</td>
                                                    <td>
                                                        <Button
                                                            color="danger"
                                                            onClick={() => this.delItem(cartItem)}
                                                        >del</Button>
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                    </thead>

                                </table>

                                <button className="btn btn-success w-100">BUY</button>
                            </div>
                        )
                        :
                        (<h2
                            style={{
                                display: "grid",
                                minHeight: "90vh",
                                alignContent: "center",
                                justifyContent: "center"
                            }}
                        >
                        <span  className="alert alert-danger">Empty Cart</span>
                        </h2>)

                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)