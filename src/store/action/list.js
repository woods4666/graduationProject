import * as TYPES from "../action-types";
import { search , queryCategory} from "../../api/goods";

let list = {
    modify(payload){
        return async dispatch => {
            let data = {};
            if(payload.id){
                data = await queryCategory({id:payload.id})
            }else{
                data = await search(payload.ref)
            }
            dispatch({
                type:TYPES.LIST_MODIFY,
                data
            })
        }
    }
};


export default list