import * as TYPES from "../action-types";

let detail = {
    init(payload){
        return {
            type:TYPES.DETAIL_INIT,
            payload
        }
    },
    modify(payload){
        return {
            type:TYPES.DETAIL_MODIFY,
            payload
        }
    }
}

export default detail