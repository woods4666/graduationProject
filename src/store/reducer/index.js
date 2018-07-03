import {combineReducers} from 'redux'
import home from './home'
import usercenter from './usercenter'
let reducer=combineReducers({
    home,
    usercenter
});
export default reducer;