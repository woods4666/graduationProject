import * as TYPES from '../action-types'
let setting =function (state={
    left:'50%'
                       },action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.SET_LEFT:
            state.left=action.left;
    }
    return state;
};
export default setting;