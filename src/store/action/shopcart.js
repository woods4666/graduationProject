import * as TYPES from '../action-types';
import {query} from '../../api/shopcart'
let shopcart={
   queryData() {
       return async dispatch => {
           let result = await query(0);
           dispatch({
               type: TYPES.ADD_CART,
               result
           });
       }
   },

    insrease(payload){
        return async dispatch => {
            dispatch({
                type: TYPES.ADD_INCREASE,
                payload
            });
        }
    },

    reduce(payload){
        return async dispatch => {
            dispatch({
                type: TYPES.REDUCE,
                payload
            });
        }
    },



    unpay(){
        return async dispatch => {
            let result = await query(0);
            dispatch({
                type: TYPES.UNPAY,
                result
            });
        }
    },
    select(mode){
       return {
           type:TYPES.HANDLE_MODE,
           mode
       }
    }

};
export default shopcart;