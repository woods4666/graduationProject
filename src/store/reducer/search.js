import * as TYPES from '../action-types'
let search= function(state={
    searchData:[]
                     },action) {
   state=JSON.parse(JSON.stringify(state));
   switch (action.type){
       case TYPES.SEARCH:
           let result=action.payload;
           console.log(result);
           let {list,code}=result;
           if (code==0){
               state.searchData=list;
           }
           break;
   }
   return state;
};
export default search;