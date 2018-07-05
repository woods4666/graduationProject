import {combineReducers} from 'redux'
import home from './home'
import usercenter from './usercenter'
import search from './search'

let reducer=combineReducers({
    home,
    usercenter,
    search
});
export default reducer;