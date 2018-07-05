import {combineReducers} from 'redux'
import home from './home'
import usercenter from './usercenter'
import shopcart from './shopcart'
let reducer=combineReducers({
    home,
    usercenter,
    shopcart
});
export default reducer;