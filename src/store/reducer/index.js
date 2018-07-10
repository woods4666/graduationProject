import {combineReducers} from 'redux'
import home from './home'
import usercenter from './usercenter'
import search from './search'
import detail from "./detail";
import setting from './setting'
import shopcart from './shopcart'
import list from './list';

let reducer=combineReducers({
    home,
    usercenter,
    search,
    detail,
    setting,
    shopcart,
    list
});
export default reducer;