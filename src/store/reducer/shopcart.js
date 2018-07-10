import * as TYPES from '../action-types'

let initState = {
    isEdit: false,
    cartList: [],
    selectAll: true,
};

export default function shopcart(state = initState, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.CART_EDIT:
            state.isEdit = action.isEdit;
            break;
        case TYPES.CART_QUERY_INFO:
            state.cartList = action.cartList.map(item => {
                return {...item, isCheck: true};
            });
            break;
        case TYPES.CART_NUM_UPDATE:
            state.cartList = state.cartList.map(item => {
                if (item.id === action.id) {
                    item.isCheck = true;
                    action.num > 0 ? item.num++ : item.num--;
                }
                return item;
            });
            state.cartList.every(item => item.isCheck === true) ? state.selectAll = true : state.selectAll = false;
            break;
        case TYPES.CART_GOODS_CHECKED:
            let mode = action.mode;
            if (mode === 'all') {
                state.selectAll = !state.selectAll;
                state.cartList = state.cartList.map(item => {
                    return {...item, isCheck: state.selectAll}
                });
            } else {
                let item = state.cartList.find(item => parseFloat(item.id) === parseFloat(mode));
                item.isCheck = !item.isCheck;
                state.cartList.every(item => item.isCheck === true) ? state.selectAll = true : state.selectAll = false;
            }
            break;
        case TYPES.CART_GOODS_REMOVE:
            let idList = action.payload;
            console.log(idList);
            idList.map(value => {
                state.cartList = state.cartList.filter(item => parseFloat(item.id) !== parseFloat(value));
            });
            break;
    }
    return state;
}
