import * as TYPES from '../action-types'
let userCenter={
  changeLoginState(state,phone){
      return {
          type:TYPES.CHANGE_lOGIN_STATE,
          state,
          phone
      }
  }
};
export default userCenter;