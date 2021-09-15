import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
})

export default rootReducer;