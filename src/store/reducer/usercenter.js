import * as TYPES from '../action-types';
export default function home(state={
    loginState:0,
                                phone:null
                             },action) {
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.CHANGE_lOGIN_STATE:
            action.state==null?null:state.loginState=action.state;
            action.phone==null?null:state.phone=action.phone;
    }
    return state;
}