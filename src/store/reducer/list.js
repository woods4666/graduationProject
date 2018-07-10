import * as TYPES from "../action-types";

const INIT_STATE = {
    list:[]
};
export default function list (state = INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.LIST_MODIFY:
            console.log('2');
            state.list = action.data.list;
            break;
        default:
            break;
    }
    return state
}