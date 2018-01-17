import { combineReducers } from 'redux'
import coin from "./coin/reducer";
import feelz from "./feelz/reducer";

export default combineReducers({
  coin,
  feelz,
});
