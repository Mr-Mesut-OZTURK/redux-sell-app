import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"

class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories()
        // console.log(this.props)

    }  

    selectCategory(category){
        this.props.actions.changeCategory(category)
        this.props.actions.getProducts(category.id)
    }
    
    render() {
        // console.log(this.props.categories)
        return (
            
            <div style={{cursor: 'pointer'}}>
                <h3 className="bg-success text-light text-center p-2 rounded">categories</h3>
                <ListGroup>
                    {

                        this.props.categories.length > 0?
                        (this.props.categories.map((category, index) => (
                            
                            <ListGroupItem
                                active={this.props.currentCategory.id===category.id} 
                                key={index}
                                onClick={() =>this.selectCategory(category) }
                            >
                                {category.categoryName}
                            </ListGroupItem>

                        )))
                        :
                        ("")
                    }
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)