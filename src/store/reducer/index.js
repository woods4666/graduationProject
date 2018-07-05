import {combineReducers} from 'redux'
import home from './home'
import usercenter from './usercenter'
import search from './search'
import detail from "./detail";

let reducer=combineReducers({
    home,
    usercenter,
    search,
    detail
});
export default reducer;