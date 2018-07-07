import {combineReducers} from 'redux'
import home from './home'
import usercenter from './usercenter'
import search from './search'
import detail from "./detail";
import setting from './setting'

let reducer=combineReducers({
    home,
    usercenter,
    search,
    detail,
    setting
});
export default reducer;