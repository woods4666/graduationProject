import * as TYPES from '../action-types'
import {query,remove} from '../../api/shopcart'

let shopcart = {
    edit(isEdit) {
        return {
            type: TYPES.CART_EDIT,
            isEdit
        };
    },
    queryInfo() {
        return async dispatch => {
            let result = await query();
            dispatch({
                type: TYPES.CART_QUERY_INFO,
                cartList: result.list
            });
        }
    },
    numUpdate(id, num) {
        return {
            type: TYPES.CART_NUM_UPDATE,
            id,
            num
        };
    },
    goodsChecked(mode){
        return {
            type: TYPES.CART_GOODS_CHECKED,
            mode
        };
    },
    goodsRemove(payload){
        return async dispatch=>{
            let result = await remove(payload);
            result.code===0?
                dispatch({
                    type: TYPES.CART_GOODS_REMOVE,
                    payload
                }):null;
        }
    }
};

export default shopcart;