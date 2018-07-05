import * as TYPES from "../action-types";

let INIT_STATE = {
    matrix:[]
}
export default function detail (state = INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.DETAIL_INIT:
            state.matrix = action.payload;
            break;
        case TYPES.DETAIL_MODIFY:
            let {a,b} = action.payload;
            state.matrix[a] = b;
            break;
        default:
            break;
    }
    return state
}