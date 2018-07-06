import * as TYPES from '../action-types'
let setting={
    setLeft(left){
        return {
            type:TYPES.SET_LEFT,
            left
        }
    }
};
export default setting;