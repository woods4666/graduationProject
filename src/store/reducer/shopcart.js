import * as TYPES from '../action-types';

export default function home(state={
    shopCart:{
        unpay:[],
        pay:[]
    }
},action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.PENDING_PAYMENT:
            state.shopCart.unpay=action.payload;
            break;
        case TYPES.PAYMENTED:
            state.shopCart.pay=action.payload;
            break
    }
    return state;
}