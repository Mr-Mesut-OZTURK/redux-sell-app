import React, { Component } from 'react'
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    Navbar
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import alertify from 'alertifyjs';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'


const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* padding: 2px; */
  margin: 10px 20px 0;
  display: inline-block;
  &:hover {
      color: violet;
  }
  @media (max-width:720px){
    margin: 0;
  }
`;



class CartSummery extends Component {


    removeFromCart = (delItem) => {
        this.props.actions.removeFromCart(delItem)
        // console.log(this.props)
        alertify.error(delItem.product.productName + " deleted from cart!...")
        // console.log("delItem : ", delItem)
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ?
                        (
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={{color:"white"}}>
                                    cart : <Badge style={{ backgroundColor: "blueviolet" }}>{this.props.cart.length}</Badge>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {
                                        this.props.cart.map((cartItem, index) => (
                                            <DropdownItem key={index} className="d-flex justify-content-between">
                                                <Badge
                                                    onClick={() => this.removeFromCart(cartItem)}
                                                    style={{ backgroundColor: "red", padding: "3px 8px 8px" }}
                                                >x</Badge>
                                                <span className="alert alert-primary w-100 p-0 mx-2">{cartItem.product.productName}</span>
                                                <Badge style={{ backgroundColor: "green" }}>{cartItem.quantity}</Badge>
                                            </DropdownItem>
                                        ))
                                    }
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <MyLink to="/cart">
                                            Cart
                                        </MyLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )
                        :
                        (
                                <MyLink to="/cart" style={{color:"white"}}>
                                        Empty Cart
                                </MyLink>
                        )
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


export default connect(mapStateToProps, mapDispatchToProps)(CartSummery)