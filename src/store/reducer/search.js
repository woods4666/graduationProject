import * as TYPES from '../action-types'
let search= function(state={},action) {
   state=JSON.parse(JSON.stringify(state));
   switch (action.type){
       case TYPES.SEARCH:
           let result=action.payload;
           console.log(result);
           break;
   }
   return state;
};
export default search;