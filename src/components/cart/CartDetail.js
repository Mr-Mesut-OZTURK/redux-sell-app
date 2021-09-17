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
                                <h2 style={{textAlign:"center",margin:"20px 0"}}>My Cart</h2>
                                <table style={{
                                    // border:"solid", 
                                    width:"100%",}}>

                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>quantityPerUnit</th>
                                            <th>unitPrice</th>
                                            <th>unitsInStock</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <thead>
                                        {
                                            this.props.cart.map((cartItem, index) => (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{cartItem.product.productName}</td>
                                                    <td>{cartItem.product.quantityPerUnit}</td>
                                                    <td>{cartItem.product.unitPrice}</td>
                                                    <td>{cartItem.quantity}</td>
                                                    <td>
                                                    <Button 
                                                        color="danger"
                                                        onClick={()=>this.delItem(cartItem)}
                                                    >del</Button>
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                    </thead>

                                </table>
                            </div>
                        )
                        :
                        (<h2>Sepet Boş</h2>)
                            
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