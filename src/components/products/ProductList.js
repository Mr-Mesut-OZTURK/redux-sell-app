import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import { bindActionCreators } from 'redux';
import * as actionTypes from "../../redux/actions/productActions"

class ProductList extends Component {

    componentDidMount(){
        this.props.actions.getProducts()
    }

    render() {

        console.log(this.props);
        return (
            <div>
                <Badge style={{backgroundColor:"green",fontSize:"1.3em"}}>products</Badge>
                <Badge style={{backgroundColor:"blue",fontSize:"1.3em"}}>{this.props.currentCategory.categoryName}</Badge>
                

            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        currentCategory:state.changeCategoryReducer,
        categories:state.categoryListReducer,
        products:state.productListReducer,
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:{
            getProducts: bindActionCreators(actionTypes.getProducts, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)