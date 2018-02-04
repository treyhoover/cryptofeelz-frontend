import { combineReducers } from 'redux'
import feel from "./feel/reducer";
import { responsiveStateReducer} from 'redux-responsive'


export default combineReducers({
  feel,
  browser: responsiveStateReducer,
});
