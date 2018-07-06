import * as TYPES from '../action-types';
export default function home(state={
    loginState:0,
                                phone:null
                             },action) {
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.CHANGE_lOGIN_STATE:
            state.loginState=action.state;
            state.phone=action.phone;
    }
    return state;
}