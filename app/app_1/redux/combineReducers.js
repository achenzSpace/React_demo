import {combineReducers} from  'redux'
import CityReduxData from './cityRedux'
import IsLogin from './isLogin'
const rootReducers = combineReducers({
    CityReduxData,
    IsLogin
});
export default rootReducers;

