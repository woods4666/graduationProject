import * as TYPES from '../action-types';
import {query} from '../../api/shopcart'
let shopcart={
    queryUnpay(payload={}){
        return {
            type:TYPES.PENDING_PAYMENT,
            payload:query(0)
        }
    },
    queryPay(){
        return {
            type:TYPES.PAYMENTED,
            payload:query(1)
        }
    }
};
export default shopcart;