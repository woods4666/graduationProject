import *as TYPES from '../action-types';
export default function home(state={
    cartData:[],
    selectAll: true
},action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.ADD_CART:
            let {code,list}=action.result;
            if(parseFloat(code)===0){
                list.forEach(item=>{
                    let {num}=item;
                    item.num=(!num)?1:num;
                });
                state.cartData=list;
            }
            break;

        case TYPES.ADD_INCREASE:
            /*console.log(action.payload);*/
            let {id}=action.payload.params;
            let searchItem=state.cartData.find(item => {
                return item.id === id
            });
            isNaN(searchItem.num)?searchItem.num=1:null;
            searchItem.num=parseFloat(searchItem.num)+1;
            break;

        case TYPES.REDUCE:
            /*console.log(action.payload);*/
            let {id:Id}=action.payload.params;
            let Item=state.cartData.find(item => {
                return item.id === Id
            });
            isNaN(Item.num)?Item.num=1:null;
            if(parseFloat(Item.num)-1<1){
                Item.num=1;
            }else {
                Item.num=parseFloat(Item.num)-1;
            }

            break;
        case TYPES.UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.cartData.unpay = action.result.data;

                state.cartData.unpay = state.cartData.unpay.map(item => {
                    return {...item, check: true};
                });
                state.selectAll = true;
            }
            break;
        case TYPES.HANDLE_MODE:
            let mode = action.mode;
            if (mode === 'all') {
                state.selectAll = !state.selectAll;
                state.cartData.unpay = state.cartData.unpay.map(item => {
                    return {...item, check: state.selectAll};
                });
            } else {
                let item = state.cartData.unpay.find(item => {
                    return parseFloat(item.id) === mode;
                });
                item.check = !item.check;
                //=>注意:验证是否所有的课程都是选中的，如果是全选也要选中
                let f = state.cartData.unpay.find(item => {
                    return item.check === false;
                });
                f ? state.selectAll = false : state.selectAll = true;
            }
            break;

    }
    return state;
}