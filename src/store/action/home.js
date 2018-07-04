import * as TYPES from '../action-types';
import {queryBanner} from '../../api/home'
let home={
    queryBanner(){
        let data= queryBanner();
        return {
            type:TYPES.HOME_QUERY_BANNER,
            data
        }
    }
};
export default home;