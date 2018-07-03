import {combineReducers} from 'redux'
import home from './home'
import usercenter from 'uesrcenter'
let reducer=combineReducers({
    home,
    usercenter
});
export default reducer;