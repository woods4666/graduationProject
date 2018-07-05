import * as TYPES from '../action-types'
import {search} from '../../api/goods'
export default {
    searchProduct(ref){
        return {
            type:TYPES.SEARCH,
            payload:search(ref)
        }
    }
};
