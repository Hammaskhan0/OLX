import { combineReducers } from "redux";
import userReducer from './Reducer/userReducer'
import themeReducer from './Reducer/themeReducer'

export default combineReducers({
    userReducer,
    themeReducer,
})
