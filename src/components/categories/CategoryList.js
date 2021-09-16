import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories()
        // console.log(this.props.categories)

    }
    
    render() {
        // console.log(this.props.categories)
        return (
            
            <div>
                <h3>categories</h3>
                <ListGroup>
                    {

                        this.props.categories.length > 0?
                        (this.props.categories.map((category, index) => (
                            
                            <ListGroupItem
                                active={this.props.currentCategory.id===category.id} 
                                key={index}
                                onClick={() => this.props.actions.changeCategory(category)}
                            
                            >
                                {category.categoryName}
                            </ListGroupItem>

                        )))
                        :
                        ("")
                    }
                </ListGroup>
                {/* <h5>seçili kategori : {this.props.currentCategory.categoryName}</h5> */}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)